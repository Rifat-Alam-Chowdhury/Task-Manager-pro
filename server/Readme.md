# Task Manager Pro - Backend

This is the backend server for Task Manager Pro, a task management application that supports real-time synchronization and efficient data handling. It is built using Express and MongoDB and provides a robust API for task management.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **RESTful API**: Built with Express for handling CRUD operations.
- **Database Integration**: Uses MongoDB for storing tasks and user data.
- **Cross-Origin Resource Sharing**: Enabled with CORS for frontend-backend communication.
- **Environment Configuration**: Managed using `dotenv` for secure environment variables.
- **Auto-reloading**: Utilizes Nodemon for automatic server restarts during development.

---

## Installation

To run the backend locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rifat-Alam-Chowdhury/Task-Manager-pro.git
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

## Usage

- The backend provides RESTful APIs for:
  - Creating, reading, updating, and deleting tasks.
  - User authentication and authorization (optional, if implemented).
- It is designed to work seamlessly with the frontend built using React.

---

## Dependencies

### Core Dependencies

- **Express**: ^4.21.2 - Fast and lightweight web framework for Node.js.
- **MongoDB**: ^6.13.0 - Driver for connecting to MongoDB.
- **Cors**: ^2.8.5 - Middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv**: ^16.4.7 - For managing environment variables.
- **@tanstack/react-query**: ^5.66.7 - Data fetching and caching solution.

### Development Dependencies

- **Nodemon**: ^3.1.9 - For automatic server restarts during development.

---

## Development

To contribute or make changes, follow the steps below:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a Pull Request.

---

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/your-username/task-manager-pro-backend/issues).

---
