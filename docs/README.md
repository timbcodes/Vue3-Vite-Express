# Vue3-Vite-Express
This is a basic project scaffold for a frontend with Vue 3 and Vite, and a backend with Node and Express.

## Vue 3 and Vite
This frontend scaffold contains most of the stuff you'll need to get started building a Vue 3 project, including:
  - Vue3-Mq for easy responsive breakpoints
  - Pinia for state management
  - Axios for API Calls
  - uuidV4 for creating unique IDs
  - Vue3-Cookies for cookies
  - Argon2 for scratch authentication
  
## Express
 This is a web backend you can use as an intermediary between your frontend web client and your backend microservices. It includes everything you need to get started:
  - CORS with a config file to get you started (These settings are for local development only! You'll need to change these before launching to prod)
  - Express-session middleware to send session cookies if needed
  - Axios for API calls to your backend microservices
  - MySQL2 if needed (you can change this to fit your choice of database)
  - MySQL Session Store (again, you can change if you use a different database)
  - Nodemon for quality of life

## To Get Started:
Clone this repository to your code editor. Open a terminal in your editor and do the following to set up the frontend:

  1. Type cd client
  2. Type npm install
  3. Type npm run dev to start the Vite dev server
  
To setup the backend, open your terminal and:
  
  1. Type cd server
  2. Type npm install
  3. Type nodemon run start
  
  If you need to change the port that your project is running on, you can do this in bin/www
