# 🛒 E-Commerce Platform  

🚀 A **full-stack E-Commerce platform** built with **React, Redux Toolkit, Node.js, Express.js, and MongoDB**. Users can browse products, add them to the cart, and manage their orders seamlessly.  

---

## 📌 Features  
✅ **Product Listing** – Fetch products dynamically from the database  
✅ **Cart Functionality** – Add, remove, and manage cart items  
✅ **User Authentication** – Secure login and registration with JWT  
✅ **Order Management** – Track past orders and manage purchases  
✅ **Optimized State Management** – Redux Toolkit for efficient data handling  
✅ **Responsive UI** – Modern, mobile-friendly design  

---

## 🏗 Tech Stack  

### 🌐 Frontend  
- **React.js** – UI Development  
- **Redux Toolkit** – State Management  
- **React Router** – Navigation  
- **Axios** – API Communication  
- **CSS** – Styling  

### 🖥 Backend  
- **Node.js & Express.js** – REST API  
- **MongoDB (Atlas)** – Cloud Database  
- **JWT (JSON Web Tokens)** – Authentication  
- **bcrypt.js** – Secure Password Hashing  

### ☁ Hosting  
- **Frontend & Backend:** Hosted on **GitHub**  

---

## 🛠 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/ecommerce-platform.git
cd ecommerce-platform
```

### 2️⃣ Backend Setup  
```sh
cd backend
npm install
```
Create a `.env` file in the `backend` folder and add:  
```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
```
Run the backend server:  
```sh
npm run dev
```

### 3️⃣ Frontend Setup  
```sh
cd frontend
npm install
npm start
```

---

## 📜 API Endpoints  

### 🔑 **Authentication**  
- `POST /register` – Register a new user  
- `POST /login` – Authenticate user & return JWT  

### 📦 **Products**  
- `GET /products` – Fetch all products  

### 🛒 **Cart & Orders**  
- `POST /create-order` – Place an order  
- `GET /orders/:userId` – Fetch user orders  

---

## 🎨 UI Preview  
![E-Commerce Preview](https://github.com/Priyankanegi28/E-commerce-Platform/blob/main/frontend/public/login.png)
![E-Commerce Preview](https://github.com/Priyankanegi28/E-commerce-Platform/blob/main/frontend/public/Main.png)

---

## 📢 Future Enhancements  
🔹 Implement **Wishlist Feature**  
🔹 Add **Admin Panel** for Product Management  
🔹 Enable **Order Tracking System**  

---

## 🤝 Contribution & Support  
- **Feel free to fork and contribute!**  
- Raise issues if you find bugs!  

### 📝 License  
This project is **MIT Licensed**. Happy coding! 🚀  

---
