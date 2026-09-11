# JustLearn

**JustLearn** is a full-stack AI-powered learning platform designed to make video-based learning faster, smarter, and easier to manage.

Learners can search through educational video content using natural-language queries and quickly jump to the exact point where a topic is explained. Instructors and administrators can manage courses, modules, lessons, and instructor profiles through a dedicated dashboard.

The project also follows a structured AI-assisted development workflow using project rules, context files, and custom agent skills to keep development organized, maintainable, and scalable.

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Project Structure](#project-structure)

## ✨ Introduction

JustLearn is built as a modern learning platform focused on improving how users discover and consume educational video content.

Instead of manually searching through long videos, learners can describe what they want to learn in natural language and receive relevant results that take them directly to the appropriate section of a lesson.

The platform also provides an administrative environment where course creators can:

* Create and manage courses
* Organize modules and lessons
* Manage instructor profiles
* Update video content and metadata
* Monitor learner activity and engagement

JustLearn is designed with scalability, type safety, reusable components, and a clean application architecture in mind.

## ⚙️ Tech Stack

### Frontend

* **Next.js** — Full-stack React framework used for application routing, rendering, and server-side functionality.
* **TypeScript** — Provides static typing and improved developer experience across the application.
* **Tailwind CSS** — Utility-first CSS framework used to build responsive and consistent interfaces.
* **shadcn/ui** — Reusable UI components for building accessible and maintainable interfaces.

### Backend & Data

* **Sanity** — Headless CMS used to manage courses, modules, lessons, video metadata, and instructor information.
* **Clerk** — Authentication and user management with role-based access control.

### Analytics & Development

* **PostHog** — Product analytics and user behavior tracking.
* **CodeRabbit** — AI-assisted code review and development feedback.

### AI

* **OpenAI** — Powers the intelligent video search experience and AI-driven content discovery.

## 🔋 Features

### 🎯 Intelligent Video Search

Search educational video content using natural-language queries and quickly navigate to the relevant point in a lesson.

### 📚 Course Management

Administrators and instructors can create and manage:

* Courses
* Modules
* Lessons
* Video content
* Instructor profiles

### 🔐 Authentication & Authorization

Secure authentication powered by Clerk with protected routes and role-based access for learners and administrators.

### 🗂️ Headless Content Management

Sanity provides a flexible content management system for organizing course structures and video metadata.

### 📊 Product Analytics

PostHog tracks important user interactions and engagement to help understand how learners use the platform.

### 🤖 AI-Assisted Development

The project uses structured AI-assisted development practices including project rules, context files, and custom agent workflows.

### ♻️ Reusable Architecture

Built with reusable components and strongly typed application logic to make the project easier to maintain and extend.

## 🚀 Getting Started

Follow these steps to run JustLearn locally.

### Prerequisites

Make sure you have the following installed:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* npm

### Clone the Repository

```bash
git clone <your-repository-url>
cd justlearn
```

### Install Dependencies

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the root of the project:

```env
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Sanity
SANITY_API_READ_TOKEN=
SANITY_CONTEXT_MCP_URL=

# OpenAI
OPENAI_API_KEY=
```

Add your own credentials to each environment variable.

### Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📁 Project Structure

A simplified structure of the project:

```text
justlearn/
├── app/
│   ├── (auth)/
│   ├── (root)/
│   ├── admin/
│   └── api/
├── components/
├── lib/
├── sanity/
├── public/
├── types/
├── .env
├── next.config.ts
├── package.json
└── README.md
```

The exact structure may evolve as the project grows.

## 🛠️ Development

JustLearn is actively developed with a focus on:

* Clean and maintainable code
* Type-safe development
* Reusable components
* Scalable architecture
* Secure authentication
* AI-powered functionality
* Performance optimization

## 📌 Future Improvements

Potential future improvements include:

* Personalized learning recommendations
* AI-generated course summaries
* AI-powered quizzes
* Learning progress tracking
* Bookmarks and watch history
* Instructor analytics
* Course completion certificates
* Improved semantic video search
* Personalized learning paths

## 📄 License

This project is intended for educational and development purposes.
