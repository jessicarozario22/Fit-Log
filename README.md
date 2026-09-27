# 🏋️ FitLog — Workout Library

A modern, responsive workout library and personal fitness planning web application built with **Next.js** and **Tailwind CSS**.

FitLog allows users to explore workouts, view detailed exercise information, save workouts for later, and build a personalized **Today's Plan** with live workout statistics.

---

## 🌐 Live Demo

**Live Website:** `YOUR_LIVE_LINKhttps://jessicarozario22.github.io/Fit-Log/`

**GitHub Repository:** `YOUR_GITHUB_REPOSITORY_LINK`

---

## 📌 About The Project

**FitLog** is a dark-themed workout library designed for users who want a simple and focused way to explore exercises and organize their daily workout routine.

Users can browse a collection of workouts, check detailed exercise information, add exercises to their daily plan, save workouts for later, and track their planned workout statistics.

The application is fully responsive and optimized for **mobile, tablet, and desktop** screens.

---

## ✨ Key Features

* 🏋️ **Workout Library** — Browse workouts with images, categories, equipment, duration, calories, and ratings.
* 📋 **Today's Plan** — Add workouts to a personalized daily workout plan with a maximum limit of five exercises.
* 🔖 **Save for Later** — Save interesting workouts and access them from the Saved tab.
* 🔍 **Workout Details** — View complete workout information including equipment, difficulty, sets, reps, instructions, and statistics.
* 📊 **Live Workout Metrics** — Track planned exercises, total workout time, and estimated calories.
* 🔃 **Sort Workouts** — Sort the workout library by duration, calories, or rating.
* ✅ **Mark as Done** — Mark planned workouts as completed.
* 🗑️ **Remove Workouts** — Remove exercises from Today's Plan or Saved workouts.
* 💾 **Local Storage** — Workout plans and saved items remain available after page reload.
* 🔔 **Toast Notifications** — Get instant feedback when adding, saving, completing, or removing workouts.
* 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop devices.
* ⚠️ **Custom 404 Page** — Displays a user-friendly page for invalid routes.
* ⏳ **Loading States** — Provides loading feedback while workout data is being fetched.

---

## 🛠️ Technologies Used

| Technology             | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| **Next.js**            | React framework and application development |
| **React**              | Building reusable UI components             |
| **TypeScript**         | Type-safe development                       |
| **Tailwind CSS**       | Styling and responsive design               |
| **Next.js App Router** | Page routing and navigation                 |
| **REST API**           | Fetching workout data                       |
| **Context API**        | Managing workout plan and saved state       |
| **LocalStorage**       | Persisting user data                        |
| **React Toastify**     | Toast notifications                         |
| **Lucide React**       | Interface icons                             |

---

## 🔗 API

FitLog uses the following REST API to load workout data.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

The API provides workout information such as:

* Workout name
* Description
* Category
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Instructions
* Workout image

---

## 📄 Pages

### 🏠 Home Page

The Home page contains:

* Responsive navigation bar
* Hero/banner section
* Workout library
* Workout cards
* Workout sorting
* Loading state
* Responsive workout grid

The workout library displays exercises in a **3×4 grid on large screens** and automatically adapts to smaller screen sizes.

---

### 💪 Workout Details Page

Each workout has its own dynamic details page.

Users can view:

* Large workout image
* Workout title
* Description
* Category tags
* Equipment
* Difficulty
* Sets
* Reps
* Duration
* Calories
* Rating
* Step-by-step instructions

Users can also:

* Add the workout to Today's Plan
* Save the workout for later

---

### 📋 My Plan Page

The My Plan page provides a centralized view of the user's workout activity.

#### Today's Plan

Users can:

* View planned workouts
* See total exercises
* See total workout duration
* See total calories
* View workout details
* Mark workouts as done
* Remove workouts

#### Saved

Users can access workouts they saved for later.

---

## 📊 Workout Metrics

The My Plan page dynamically calculates:

### Exercises

Number of workouts currently added to Today's Plan.

### Minutes

Total duration of all planned workouts.

### Calories

Total estimated calories from the planned workouts.

These values update automatically whenever workouts are added or removed.

---

## 🔃 Sorting

The Workout Library includes a **Sort By** dropdown with:

* Duration
* Calories
* Rating

The workout list updates dynamically based on the selected sorting option.

---

## 💾 Data Persistence

FitLog uses **LocalStorage** to preserve:

* Today's Plan
* Saved workouts
* Completed workout state

This allows users to keep their workout selections even after refreshing the browser.

---

## 📱 Responsive Design

The application is designed to provide a consistent experience across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

The layout adapts automatically through responsive Tailwind CSS utilities.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Navigate to the project

```bash
cd fit-log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

```text
http://localhost:3000
```

---

## 📦 Build for Production

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WorkoutCard.tsx
│   │   ├── WorkoutGrid.tsx
│   │   ├── SortDropdown.tsx
│   │   ├── WorkoutDetails.tsx
│   │   ├── PlanCard.tsx
│   │   ├── Metrics.tsx
│   │   ├── Tabs.tsx
│   │   ├── EmptyState.tsx
│   │   └── Footer.tsx
│   │
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   │
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── context/
│   │   └── FitLogContext.tsx
│   │
│   ├── lib/
│   │   └── api.ts
│   │
│   ├── types/
│   │   └── workout.ts
│   │
│   ├── page.tsx
│   ├── loading.tsx
│   └── not-found.tsx
│
└── ...
```

> The exact folder structure may vary depending on the implementation.

---

## 🎯 Assignment Requirements Covered

### Basic Requirements

* [x] Responsive design
* [x] 8+ meaningful Git commits
* [x] Error-free deployment
* [x] Professional README

### Main Features

* [x] Responsive Navbar
* [x] Hero section
* [x] Workout Library
* [x] Dynamic workout details
* [x] Today's Plan
* [x] Saved workouts
* [x] Workout metrics
* [x] Toast notifications
* [x] Responsive Footer
* [x] Custom 404 page
* [x] Loading state

### Challenge Features

* [x] Sort by Duration
* [x] Sort by Calories
* [x] Sort by Rating
* [x] Mark as Done
* [x] Remove workout
* [x] LocalStorage persistence

---

## 🚀 Deployment

The project is deployed using **Vercel**.

**Live Link:** `YOUR_LIVE_LINK`

---

## 👨‍💻 Author

### Jessica Mary Rozario

**UI/UX Designer & Web Developer**

* GitHub: `YOUR_GITHUB_PROFILE`
* LinkedIn: `YOUR_LINKEDIN_PROFILE`

---

## 📜 License

This project was created for educational purposes as part of a assignment.
