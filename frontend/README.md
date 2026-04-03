# 🛒 E-Commerce Web Application


## ✨ Overview

A **full-stack modern eCommerce platform** built using **React + TypeScript** and **Spring Boot**, designed with a clean UI and scalable backend architecture.

This project simulates a real-world shopping experience — from browsing products to managing cart and placing orders.

---

## 🚀 Features

### 🧑‍💻 User Features

* 🛍️ Browse products
* 🔍 View product details
* 🛒 Add / Remove items from cart
* 💾 Persistent cart system
* 🔐 JWT Authentication
* 📦 Place orders

### ⚙️ Admin Features *(Extendable)*

* ➕ Add / Edit / Delete products
* 📊 Manage orders
* 👥 User management

---

## 🧱 Tech Stack

### 🎨 Frontend

* ⚛️ React
* 🟦 TypeScript
* 🔗 Axios
* 🎨 Custom CSS (Modern UI Design)

### ⚙️ Backend

* ☕ Spring Boot
* 🔐 Spring Security (JWT)
* 🗄️ Hibernate / JPA
* 💾 H2 / MySQL

---

## 📁 Project Structure

```
E-Commerce/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   ├── security/
│   └── application.properties
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 📌 Prerequisites

Make sure you have:

* Node.js (v16+)
* Java (JDK 17+)
* Maven
* Git

---

## ▶️ Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ecommerce-project.git
cd ecommerce-project
```

---

### 2️⃣ Start Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

🔗 Runs on: `http://localhost:8080`

---

### 3️⃣ Start Frontend

```bash
cd frontend
npm install
npm run dev
```

🌐 Runs on: `http://localhost:5173`

---

## 🔐 Authentication

* JWT-based authentication
* Secure REST APIs
* Token stored in browser storage

---

## 🔗 API Endpoints

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | /api/products   | Get all products |
| POST   | /api/auth/login | User login       |
| POST   | /api/cart       | Add to cart      |
| GET    | /api/orders     | Get orders       |

---

## 🧪 Testing

* Use **Postman / Thunder Client**
* Axios used for frontend API calls

---

## 🐛 Common Issues

### ❌ 403 Forbidden

* Check JWT token
* Verify Spring Security config

### ❌ CORS Error

* Enable CORS in backend

---

## 🌟 Future Enhancements

* 💳 Payment Integration (Stripe / Razorpay)
* 🔍 Product Search & Filters
* ❤️ Wishlist Feature
* 📊 Admin Dashboard UI
* ☁️ Deployment (AWS / Vercel / Render)

---

## 📸 Screenshots

> *(Add your UI screenshots here for better impact)*

---

## 📄 License

This project is licensed under the **MIT License**

---

## 👨‍💻 Author

**Ananth**

---

## 💡 Pro Tip

👉 Replace `your-username` in badges with your actual GitHub username
👉 Add screenshots to make your repo stand out

---
