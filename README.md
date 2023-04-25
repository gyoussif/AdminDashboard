# AdminDashboard

This project is a MERN (MongoDB, Express, React, Node.js) stack admin dashboard with a focus on the backend, deployment, and data modeling. It uses Redux Toolkit Query to manage state on the frontend.

## Features
<!---- User authentication and authorization -->
- CRUD operations for multiple data models
- Pagination, sorting, and filtering of data
- Dashboard for data visualization

## Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/your-username/AdminDashboard.git
```
2. Install the dependencies for the frontend and backend:
```
cd AdminDashboard
cd server
npm install
cd ..
cd client
npm install
```
3. Create a .env file in the server folder of the project and add the following variables:
```
PORT=5001
MONGODB_URI=<mongo database url>
```
<!---- JWT_SECRET=your-secret-key -->
4. Create a .env file in the client folder of the project and add the following variables:
```
REACT_APP_BASE_URL=http://localhost:5001 #server url
```
5. Start the backend server:
```
cd server
npm run dev
```
6. Start the frontend development server:
```
cd client
npm start
```
7. Open your browser and navigate to http://localhost:3000 to see the application running.
