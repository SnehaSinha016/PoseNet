# Postura – AI-Powered Real-Time Posture Detection

**Postura** is a full-stack web application that uses **PoseNet** via [ml5.js](https://ml5js.org/) and **p5.js** to detect a user’s posture in real-time, classify it as **Good**, **Slouching**, or **Leaning**, and provide instant feedback through visual cues, **voice guidance**, and an **analytics dashboard**.

---

## Features

### Current
- **Real-Time Posture Detection** – Uses PoseNet to estimate body keypoints from live webcam feed.
- **Posture Classification** – Heuristic rules (angles & distances) classify Good/Slouching/Leaning.
- **Visual Overlay** – Draws skeleton and keypoints over live video for feedback.
- **User Authentication** – Signup/Login with secure password hashing using bcrypt.(coming soon)
- **Full-Stack Integration** – React/Vite frontend, Express.js backend, MongoDB database.

###  Planned Enhancements
- **Voice Guidance** – Audio coaching when posture degrades or recovers.
- **Multi-Camera Support** – Select between multiple webcams or run multi-angle detection.
- **Posture Score** – Numeric scoring (0–100) for session performance.
- **Analytics Dashboard** – Visualize daily trends, average scores, time in each posture, and streaks.

---

##  Tech Stack

**Frontend**
- React + Vite
- p5.js + ml5.js (PoseNet)
- Tailwind CSS
- Axios (API communication)

**Backend**
- Node.js + Express.js
- MongoDB + Mongoose
- dotenv (environment configuration)
- CORS enabled API

---

##  Project Structure

```
PoseNet/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Detection, auth, navbar, etc.
│   │   ├── pages/        # Home, dashboard
│   │   ├── api.js        # Axios instance
│   │   └── App.jsx
│   └── index.html
└── server/               # Express backend
    ├── models/           # Mongoose schemas
    │   └── user.js
    ├── index.js          # API routes, server config
    └── .env.example      # Environment variables
```

---

##  Environment Variables

Create a `.env` file in `server/`:
```env
MONGODB_URL=mongodb+srv://<user>:<password>@<cluster>/<db>
PORT=3001
```

Optional `.env` in `client/`:
```env
VITE_API_BASE=http://localhost:3001
```

---

##  Local Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/postura.git
   cd postura
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

3. **Set up environment variables** (see above).

4. **Run backend**
   ```bash
   cd server
   npm start
   ```

5. **Run frontend**
   ```bash
   cd ../client
   npm run dev
   ```

---

##  How It Works

1. **Pose Detection** – PoseNet estimates 17 body keypoints from webcam feed.
2. **Posture Classification** – Calculates key angles (neck–shoulder–hip, shoulder tilt) to assign Good/Slouch/Lean.
3. **Feedback Loop**
   - **Visual:** skeleton + label overlay.
   - **Voice (planned):** speaks posture tips on state changes.
   - **Analytics (planned):** logs scores & states for later analysis.

---

## Planned Analytics Dashboard

- **Line chart** – Posture score over time.
- **Pie chart** – Time spent in each posture.
- **KPIs** – Avg score today, streaks, longest good posture period.
- **History view** – 7-day and 30-day trends.

---
## Deployment

 - **Frontend** -[https://posturedetector1.netlify.app/)









