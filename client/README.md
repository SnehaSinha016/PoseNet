
# PoseNet AI Posture Detection (Frontend)

This is the frontend of the **PoseNet AI Posture Detection** project built using **React**, **Tailwind CSS**, and **Bootstrap**. It leverages the **PoseNet model** via `ml5.js` or compatible tools to analyze and detect human posture in real time using the webcam feed.

##  Features

- Real-time webcam-based posture detection
- Clean and responsive UI with Tailwind and Bootstrap
- Login and Signup forms
- Routing with `react-router-dom`
- Form validation with `react-hook-form`
- Scrollbar customization using `tailwind-scrollbar`

##  Tech Stack

- **React 19**
- **Tailwind CSS**
- **Bootstrap**
- **Vite** (for blazing fast development)
- **React Router v7**
- **React Hook Form**
- **PoseNet (ml5.js or TensorFlow.js backend)**

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/PoseNet-main.git
cd PoseNet-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or as specified in your terminal).

## 🛠 Folder Structure

```
PoseNet-main/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
```

##  Build for Production

```bash
npm run build
```

##  Authentication

Currently, static forms are implemented for **login** and **signup**. Form handling is managed via `react-hook-form`. Backend integration is planned.

##  Backend (Coming Soon)

We are working on integrating a backend that will handle:

- User authentication
- Pose classification analytics
- Real-time feedback and session history

Stay tuned for updates!

##  Screenshot

> Add a screenshot here if needed

##  License

MIT License © 2025 [Your Name or Team]

