# Task Manager Pro

Task Manager Pro is a full-stack task management application that allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. The application features real-time synchronization using Firebase Authentication and MongoDB, ensuring a seamless and responsive user experience.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend](#frontend)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Backend](#backend)
  - [Installation](#installation-1)
  - [Environment Variables](#environment-variables-1)
  - [API Endpoints](#api-endpoints)
- [Real-Time Synchronization](#real-time-synchronization)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Task Manager Pro is designed to enhance productivity by providing:
- Authentication via Firebase (Google Sign-In)
- Real-time data synchronization with MongoDB
- Drag-and-drop task management
- Fully responsive design for desktop and mobile

---

## Features

### 1. Authentication
- Only authenticated users can access the application.
- Google Sign-In via Firebase Authentication.
- User details (User ID, email, and display name) are stored in MongoDB upon first login.

### 2. Task Management
- Add, edit, delete, and reorder tasks.
- Tasks are categorized into:
  - **To-Do**
  - **In Progress**
  - **Done**
- Drag and drop tasks between categories and reorder within the same category.
- Real-time updates with instant syncing to the MongoDB database.
- Each task includes:
  - **Title** (required, max 50 characters)
  - **Description** (optional, max 200 characters)
  - **Timestamp** (auto-generated upon creation)
  - **Category** (To-Do, In Progress, Done)

### 3. Real-Time Synchronization
- Ensures tasks stay in the last known order even after a page refresh or reopening the app.
- Implemented using:
  - MongoDB Change Streams
  - WebSockets
  - Optimistic UI Updates
  - Polling (as a fallback)

---

## Tech Stack

### Frontend
- **Vite.js** + **React** for fast and efficient development.
- **TailwindCSS** for modern, minimalistic, and fully responsive UI.
- **Firebase** for authentication and real-time data sync.
- **@dnd-kit** for drag-and-drop functionality.
- **Axios** for API requests.

### Backend
- **Express.js** for building the API.
- **MongoDB** for data storage and real-time change tracking.
- **Cors** for enabling Cross-Origin Resource Sharing.
- **Dotenv** for managing environment variables.
- **Nodemon** for auto-reloading during development.

---

# Frontend

## Installation

To run the frontend locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/task-manager-pro-frontend.git](https://github.com/Rifat-Alam-Chowdhury/Task-Manager-pro.git)
    cd task-manager-pro-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create Environment File:**

    Create a `.env` file in the root directory and add your Firebase configuration:

    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

---

## Available Scripts

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build locally.

---

# Backend

## Installation

To run the backend locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/task-manager-pro-backend.git](https://github.com/Rifat-Alam-Chowdhury/Task-Manager-pro.git)
    cd task-manager-pro-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create Environment File:**

    Create a `.env` file in the root directory and provide the necessary environment variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    The server will start at `http://localhost:5000`.

---

## API Endpoints

### Task Endpoints

- **POST /tasks** – Add a new task
- **GET /tasks** – Retrieve all tasks for the logged-in user
- **PUT /tasks/:id** – Update task details (title, description, category)
- **DELETE /tasks/:id** – Delete a task

---

## Real-Time Synchronization

The application ensures real-time synchronization using:
- **MongoDB Change Streams** for listening to real-time changes in the database.
- **WebSockets** for pushing real-time updates to the frontend.
- **Optimistic UI Updates** for a smooth user experience.

---

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/your-username/task-manager-pro/issues).

---


