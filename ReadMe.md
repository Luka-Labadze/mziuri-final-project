# 🛒 Full-Stack eCommerce Website

A modern full-stack eCommerce web application built with React (Vite) on the frontend and Node.js + Express + MongoDB on the backend.
It includes authentication, secure API handling, internationalization, and performance optimizations.

---

## 🚀 Features

- 🛍️ Product browsing and shopping experience
- 🔐 User authentication (JWT + bcrypt)
- 🧾 Secure API with rate limiting & HTTP headers protection
- 🌍 Multi-language support (i18next)
- 📦 Backend API with Express + MongoDB (Mongoose)
- 📧 Email notifications (Nodemailer)
- ⚡ Fast frontend using Vite + React 19
- 🧠 React Router for navigation
- 🛡️ Security enhancements (Helmet, CORS, compression)
- 💾 Cookie-based session support
- 🔄 REST API architecture

---

## 🧱 Tech Stack

Frontend:
- React ^19
- React Router DOM
- Axios
- i18next / react-i18next
- Vite
- Sass (sass-embedded)

Backend:
- Node.js + Express ^5
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- Nodemailer
- dotenv

Security & Middleware:
- helmet
- cors
- express-rate-limit
- compression
- cookie-parser

Dev Tools:
- nodemon
- ESLint
- Vite plugins
- React type definitions

---

## 📁 Project Structure

root/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── i18n/
│   │   └── App.jsx
│   └── vite.config.js
│
└── README.md

---

## ⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/Luka-Labadze/mziuri-final-project.git

---

2. Backend setup
cd backend
npm install

Create .env file:

CONNECTION_STRING=mongodb+srv://Lithh:JujaJuja@cluster0.ihlz8xi.mongodb.net/FinalProjectDB?appName=Cluster0

PORT = 3000
MAIL_SENDER_EMAIL=ponno.provider@gmail.com
MAIL_SENDER_PASS=dgtn hwor cffw wrzv
JWT_SECRET_KEY=secret123
JWT_RESET_PASS_SECRET_KEY=secret12345
BCRYPT_PEPPER=secret1234

Run backend:
npm run dev

---

3. Frontend setup
cd frontend
npm install
npm run dev

---

## 🔐 Authentication Flow

- User registers or logs in
- Password is hashed using bcrypt
- Server issues JWT token
- Token stored in cookies/headers
- Protected routes validated via middleware

---


## 🌍 Multi-Langauge support

Uses i18next for multilingual support.

Language files:
frontend/src/i18n/locales/

---
## 🧔‍♂️ Test User Data 

- email: TestUser@gmail.com
- password: TestUser123

---
## 🛡️ Security Features

- Helmet (secure HTTP headers)
- Rate limiting (anti abuse / DDoS protection)
- CORS configuration
- bcrypt password hashing
- JWT authentication
- Cookie-based session handling

---

## 🧠 Built By

Built by Luka 🚀
Full-stack developer focused on modern web applications, backend systems, and scalable architecture.

---

## 🙌 Credits & Notes

- Built as a full-stack learning + production-ready project
- Focused on security, scalability, and clean architecture
- Designed and developed independently from scratch
