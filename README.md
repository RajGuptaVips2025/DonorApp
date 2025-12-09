# Donor & Donation Mini Module

**Candidate:** Raj Gupta
**Stack:** React, Node(Express.js), JavaScript, Tailwind CSS,Shadcn ui, PostgreSQL, bcryptjs, JWT

---

## Live URLs
- Live URL : https://jasminefoundation.netlify.app/

---

## What is included
- Pixel-perfect responsive frontend (login, signup, profile, donation form)
- Backend APIs (PostgreSQL + Express.js)
- Authentication (signup, login with JWT cookie)
- Admin endpoints for reports
- Postman collection: `https://originalrjgupta2003-3356636.postman.co/workspace/gupta-rj's-Workspace~26293de9-9cee-446a-8911-0d4cf538a915/collection/50563367-b824674c-a82d-44be-a5e9-aa80c005057b?action=share&source=copy-link&creator=50563367`

## Backend Environment variables (.env)
- PORT=""
- DB_USER=""
- DB_PASSWORD=""
- DB_HOST=""
- DB_NAME=""
- DB_PORT=""
- JWT_SECRET=""
- JWT_EXPIRES_IN=""
- NODE_ENV=""
- CLIENT_URL=""

## Frontend Environment variables (.env)
- VITE_API_URL=""
- NODE_ENV=""

# 📡 API Endpoints

## 🔐 AUTH
| Method | Endpoint             | Description                    |
|--------|-----------------------|--------------------------------|
| POST   | `/api/donor/create`   | Register user + set JWT cookie |
| POST   | `/api/donor/login`    | Login + set JWT cookie         |

---

## 👤 DONOR
| Method | Endpoint               | Description           |
|--------|-------------------------|------------------------|
| GET    | `/api/donor/:id`       | Get donor details      |

---

## 💰 DONATIONS
| Method | Endpoint                        | Description                    |
|--------|----------------------------------|--------------------------------|
| POST   | `/api/donation/create`           | Create donation entry          |
| GET    | `/api/donation/:donorId`         | List all donations of a donor  |

---

## 🛠️ ADMIN
| Method | Endpoint                        | Description                              |
|--------|----------------------------------|-------------------------------------------|
| GET    | `/api/admin/donors`             | List donors + donations + total per donor |
| GET    | `/api/admin/donations/total`    | Get total donation amount                 |



