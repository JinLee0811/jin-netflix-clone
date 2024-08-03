# Netflix Clone Coding Project

This project is a clone of Netflix, built to understand and practice full-stack web development. This README provides an overview of the project, setup instructions, and other relevant information.

## Introduction

The Netflix clone project is designed to replicate the essential features of Netflix, allowing users to browse and search for movies and TV shows, manage their profiles, and enjoy a responsive user experience.

## Features

- User Authentication (Sign Up, Login, Logout)
- Movie Browsing (Display movies and TV shows)
- Search Functionality
- Responsive Design
- User Profile Management

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - React.js

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

- **Other Tools and Libraries:**
  - Axios (for API requests)
  - Firebase (for authentication)
  - TMDb API (for movie data)
  - Redux (for state management)

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone


   Here is the correct Markdown format for the "Setup and Installation" section:

```markdown
## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies for the frontend:**

   ```bash
   cd client
   npm install
   ```

3. **Install dependencies for the backend:**

   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` directory and add the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   TMDB_API_KEY=your_tmdb_api_key
   ```

5. **Start the backend server:**

   ```bash
   npm start
   ```

6. **Start the frontend development server:**

   ```bash
   cd ../client
   npm start
   ```

7. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```
```