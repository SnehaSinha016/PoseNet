import express from "express";
const app = express();
app.get("/", (_req,res) => res.json({ ok: true }));
app.listen(3001, "127.0.0.1", () => console.log("mini up on http://127.0.0.1:3001"));
