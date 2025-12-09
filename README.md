# Donor & Donation Mini Module

**Candidate:** Raj Gupta
**Stack:** Next.js (App Router), Tailwind CSS,Shadcn ui, Prisma, PostgreSQL, bcryptjs, JWT, jose

---

## Live URLs
- Live URL : https://jasminefoundation.netlify.app/

---

## What is included
- Pixel-perfect responsive frontend (login, signup, profile, donation form)
- Backend APIs (PostgreSQL + Prisma)
- Authentication (signup, login with JWT cookie)
- Admin endpoints for reports
- Postman collection: `postman/donor-donation.postman_collection.json`
- ER Diagram: `docs/er-diagram.png`
- Flow Diagram: `docs/flow-diagram.png`

## Environment variables (.env)
- ATABASE_URL=""
- JWT_SECRET=""
- NODE_ENV=""

## Environment variables (.env)
- DATABASE_URL=""
- JWT_SECRET=""
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



