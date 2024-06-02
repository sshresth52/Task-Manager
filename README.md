# Task-Manager(Fullstack) (MERN)

#Overview <br>

The Cloud-Based Task Manager is a web application developed to improve team task management. Built on the MERN stack (MongoDB, Express.js, React, and Node.js), this platform features an intuitive interface for effective task assignment, monitoring, and collaboration. It supports both administrators and regular users, providing extensive functionalities to enhance efficiency and organization.
Effective task management is essential for team success in dynamic work environments. Traditional methods like spreadsheets are cumbersome and error-prone. The Cloud-Based Task Manager addresses these issues by providing a centralized platform for seamless collaboration and improved workflow efficiency.
With the rise of remote work, there's a growing need for tools that enhance communication and task coordination. This application leverages modern web technologies to deliver an intuitive, responsive solution. The MERN stack ensures scalability, while Redux Toolkit, Headless UI, and Tailwind CSS enhance user experience and performance.


Features
Admin Features
User Management

Set up admin accounts
Add and oversee team members
Task Assignment

Allocate tasks to individuals or groups
Modify task details and statuses
Task Properties

Categorize tasks as todo, in progress, or completed
Set priority levels (high, medium, normal, low)
Create and manage sub-tasks
Asset Management

Upload task-related assets, such as images
User Account Control

Enable or disable user accounts
Permanently delete or archive tasks
User Features
Task Interaction

Change task status (in progress or completed)
View detailed task information
Communication

Add comments or chat within task activities
General Features
Authentication and Authorization

User login with secure authentication
Role-based access control
Profile Management

Update user profiles
Password Management

Change passwords securely
Dashboard

Provide a summary of user activities
Filter tasks into todo, in progress, or completed
Technologies Used
Frontend
React (Vite)
Redux Toolkit for state management
Headless UI
Tailwind CSS
Backend
Node.js with Express.js
Database
MongoDB for efficient and scalable data storage
The Cloud-Based Task Manager is an innovative solution that enhances task management within teams. By leveraging the MERN stack and modern frontend technologies, it offers a seamless experience for administrators and users, promoting collaboration and productivity.

Setup Instructions
Server Setup
Environment Variables

First, create the .env file in the server folder with the following variables:

makefile
Copy code
MONGODB_URI=your MongoDB URL
JWT_SECRET=any secret key - must be secured
PORT=8800 or any port number
NODE_ENV=development
Set Up MongoDB

Visit the MongoDB Atlas Website.
Log in or create an account.
Create a new cluster, choose a cloud provider and region, configure cluster settings, and deploy the cluster.
Create a database user, set up IP whitelist, connect to the cluster, and configure your application.
Test the connection, then create a new database and configure the .env file with the MongoDB connection URL.
Steps to Run Server

Open the project in your preferred editor.
Navigate to the server directory: cd server.
Run npm i or npm install to install the packages.
Run npm start to start the server.
If configured correctly, you should see a message indicating the server is running successfully and the database is connected.

Client Side Setup
Environment Variables

First, create the .env file in the client folder with the following variables:

makefile
Copy code
VITE_APP_BASE_URL=http://localhost:8800 # Change the port 8800 to your port number
VITE_APP_FIREBASE_API_KEY=Firebase API key
Steps to Run Client

Navigate to the client directory: cd client.
Run npm i or npm install to install the packages.
Run npm start to run the app on http://localhost:3000.
Open http://localhost:3000 in your browser to view the application.
