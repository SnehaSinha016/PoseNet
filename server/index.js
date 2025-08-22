import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import User from "./models/user.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;
const MONGODB_URL = process.env.MONGODB_URL;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

if (!MONGODB_URL) {
  console.error("Missing MONGODB_URL in .env");
  process.exit(1);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use((req, _res, next) => {
  if (req.method === "POST" && req.path === "/users") {
    console.log("SIGNUP CONTENT-TYPE:", req.headers["content-type"]);
    console.log("SIGNUP BODY:", req.body);
  }
  next();
});

const isAtlas = /mongodb\.net/i.test(MONGODB_URL);
(async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
      ...(isAtlas ? { tls: true } : {}),
    });
    console.log("MongoDB connected");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Mongo connect error:", err.message);
    process.exit(1);
  }
})();
process.on("uncaughtException", e => console.error("UNCAUGHT:", e));
process.on("unhandledRejection", e => console.error("UNHANDLED:", e));


app.get("/", (_req, res) => res.json({ ok: true }));

app.get("/users", async (_req, res) => {
  try {
    const users = await User.find().select("-password").lean();
    res.json(users);
  } catch {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const name = (req.body.name ?? req.body.fullname?? req.body.Fullname??"").trim(); 
    const email = (req.body.email || "").trim().toLowerCase();
    const password = req.body.password || "";
    if (!name || !email || !password) {
      return res.status(400).json({ error: "name, email, password required" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ error: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });

    const { password: _omit, ...safe } = user.toObject();
    res.status(201).json(safe);
  } catch {
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.post("/login", async (req, res) => {
  try {
     const email = (req.body.email || "").trim().toLowerCase();
    const password = req.body.password || "";
    if (!email || !password)
      return res.status(400).json({ error: "email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "No record existed" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "The password is incorrect" });
    res.json({ status: "Success" });
  } catch {
    res.status(500).json({ error: "Login failed" });
  }
});
app.use((_req, res) => res.status(404).json({ error: "Route not found" }));
