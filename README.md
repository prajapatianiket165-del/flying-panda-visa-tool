✈️ Flying Panda – Visa Slot Alert Tool

A full-stack internal tool built to help The Flying Panda track visa slot availability alerts.

This application allows teams to create, manage, update, and monitor visa slot alerts through a simple interface.

🚀 Features
Backend (Node.js + Express)

Create visa slot alerts

View alerts with filters

Update alert status (Active → Booked)

Delete alerts

Pagination support

Input validation middleware

Logger middleware

Centralized error handling

In-memory data storage

Frontend (React)

Form to create alerts

Table to view alerts

Update status button

Delete alert button

Pagination controls

Connected to custom backend API

🧩 Data Model

Each alert contains:

id

country

city

visaType (Tourist / Business / Student)

status (Active / Booked / Expired)

createdAt
⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/prajapatianiket165-del/flying-panda-visa-tool.git
cd flying-panda-visa-tool

2️⃣ Start Backend
cd backend
npm install
node server.js


Backend runs on http://localhost:5000

3️⃣ Start Frontend
cd frontend
npm install
npm start


Frontend runs on http://localhost:3000

🏗 Design Decisions

Used in-memory storage for simplicity and fast setup

RESTful API structure for scalability

Middleware used for clean separation of concerns

Pagination added to simulate production-scale data handling

React kept simple with functional components and hooks

🔮 What I’d Improve for Production

Replace in-memory storage with a real database (MongoDB/PostgreSQL)

Add authentication and role-based access

Add search and sorting

Add unit and integration tests

Dockerize backend & frontend

Add CI/CD pipeline

🤖 Where AI Helped vs My Thinking

AI Assisted With

Structuring Express routes

Middleware pattern implementation

Pagination logic

React component structure

My Contributions

Feature breakdown from requirements

Data model design

UI flow decisions

API contract between frontend and backend

Testing and debugging integration

📌 Project Status

This project fulfills all required features from the assignment and demonstrates full-stack development skills, API design, and frontend-backend integration.
