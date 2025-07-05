# 📚 Micro Quiz Platform


A lightweight, modern web application that allows users to take short, topic-specific quizzes. Built with **Next.js (App Router)** and styled with the help of **Claude AI** for consistent, responsive UI using **Tailwind CSS**.


## 🚀 Live Demo - ([Link](https://micro-quiz-platform-three.vercel.app/))


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


## 📦 Setup Instructions

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/micro-quiz-platform.git
cd micro-quiz-platform

# Install dependencies
npm install

# Add environment variable
echo "NEXT_PUBLIC_BASE_URL=http://localhost:3000" > .env.local

# Start the dev server
npm run dev
```

Then open `http://localhost:3000` in your browser.


## 🧠 Challenges Faced

- Understanding how to properly use **App Router** features like `generateMetadata`, dynamic routing, and `fetch` caching strategies.
- Managing quiz state cleanly without unnecessary re-renders.
- Ensuring client-side logic (feedback, score) didn't conflict with server-side rendering.


## 🤖 AI Coding Tools Used

- **Claude AI**: Used to help generate Tailwind-based layout suggestions and component structure ideas.
- **Cursor AI**: Used it to fixed build or type error and to give suggestions in code.


## 🧪 Testing

- Manual functional testing done across:
  - Routing behavior
  - Quiz flow and state
  - Score tracking and storage
- Simple browser-based validation across desktop and mobile screens.
