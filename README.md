# Mechanic Business System

A full-stack mechanic workshop management platform where customers can view services and book repairs.

## Features

- View available mechanic services
- Book a vehicle service
- Admin dashboard to view bookings
- REST API backend
- Deployable frontend and backend

## Tech Stack

Frontend
- HTML
- CSS
- JavaScript

Backend
- Node.js
- Express

Deployment
- Vercel (Frontend)
- Render (Backend)

## Project Structure

mechanic-business-system
│
├── client
│   ├── index.html
│   ├── services.html
│   ├── booking.html
│   ├── admin.html
│   │
│   ├── js
│   │   ├── api.js
│   │   ├── services.js
│   │   ├── booking.js
│   │   └── admin.js
│   │
│   └── css
│       └── style.css
│
├── server
│   ├── server.js
│   └── package.json

## API Endpoints

GET /services  
Returns available services.

POST /book  
Creates a booking.

GET /bookings  
Returns all bookings (admin).

## Running Locally

1. Install dependencies

npm install

2. Start server

node server.js

Server runs on

http://localhost:5000

## Deployment

Frontend deployed on Vercel.

Backend deployed on Render.

## Author

Portfolio project for Junior Full Stack Developer applications.
