```md
# 📚 Micro Quiz Platform

A lightweight, modern web application that allows users to take short, topic-specific quizzes. Built with **Next.js (App Router)** and styled with the help of **Claude AI** for consistent, responsive UI using **Tailwind CSS**.

---

## 🚀 Live Demo

> _(Add your deployed Vercel/Netlify link here if available)_

---

## 🧩 Features

### ✅ Core Functionality

- **Landing Page**: Clean, welcoming landing screen with CTA to begin quizzing.
- **Category Listing** (`/home`):
  - Fetched from a mock API.
  - Statically generated (SSG) using `fetch()` and `force-cache`.
  - Uses `next/image` for optimized icons.
- **Quizzes by Category** (`/quizzes/[category]`):
  - Dynamically routed pages.
  - Server-side rendered (SSR) using `fetch()` and `no-store`.
- **Take Quiz** (`/quiz/[id]`):
  - Displays one question at a time.
  - Tracks progress using `useState`.
  - Shows real-time feedback (correct/incorrect).
  - Displays final score and stores result locally.

---

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/micro-quiz-platform.git
cd micro-quiz-platform

# Install dependencies
npm install

# Add environment variable
echo "NEXT_PUBLIC_BASE_URL=http://localhost:3000" > .env.local

# Run development server
npm run dev
````

Then visit: `http://localhost:3000`
