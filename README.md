# 🛒 E-Commerce MERN Stack Application

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-brightgreen.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.19-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

A modern, full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include user authentication, product management, shopping cart, order processing, and secure payment integration with Stripe.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Development](#-development)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### User Features

- 🔐 **User Authentication** - Secure sign up, login, and logout with JWT tokens
- 👤 **User Profile Management** - Update profile information
- 🛍️ **Product Browsing** - Browse products by category with search and filtering
- 🛒 **Shopping Cart** - Add, update, and remove items from cart
- 💳 **Secure Checkout** - Stripe payment integration for secure transactions
- 📦 **Order Management** - View order history and track orders

### Admin Features

- 👥 **User Management** - View and manage all users
- 📦 **Product Management** - Create, update, and manage products
- 📊 **Order Management** - View and manage all orders
- 🔑 **Role-Based Access Control** - Admin and general user roles

### Technical Features

- 🎨 **Responsive Design** - Mobile-first design with Tailwind CSS
- 🔒 **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 🚀 **RESTful API** - Well-structured REST API endpoints
- 📱 **State Management** - Redux Toolkit for efficient state management
- 🎯 **Error Handling** - Comprehensive error handling and validation
- 🍪 **Cookie-Based Sessions** - Secure HTTP-only cookies for token storage

## 🛠 Tech Stack

### Frontend

- **React** 18.3.1 - UI library
- **Redux Toolkit** 2.2.7 - State management
- **React Router** 6.26.0 - Client-side routing
- **Tailwind CSS** 3.4.7 - Utility-first CSS framework
- **React Icons** 5.2.1 - Icon library
- **React Toastify** 10.0.5 - Toast notifications
- **Stripe.js** 4.5.0 - Payment processing

### Backend

- **Node.js** 18+ - Runtime environment
- **Express.js** 4.19.2 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** 8.5.2 - MongoDB object modeling
- **JWT** 9.0.2 - JSON Web Tokens for authentication
- **bcryptjs** 2.4.3 - Password hashing
- **Stripe** 16.12.0 - Payment processing
- **CORS** 2.8.5 - Cross-origin resource sharing
- **Cookie Parser** 1.4.6 - Cookie parsing middleware

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager (comes with Node.js)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud)
- **Git** - Version control system
- **Stripe Account** - For payment processing (optional for development)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/PunithAchintha2003/e-commerce-mern-2024.git
cd e-commerce-mern-2024
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/ecommerce
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
# Generate a secure key: openssl rand -base64 32

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY=whsec_your_webhook_secret_key

# Frontend URL (for CORS and redirects)
FRONTEND_URL=http://localhost:3000

# Server Configuration
PORT=8080
NODE_ENV=development
```

### Environment Variables Explained

| Variable                             | Description                               | Required              |
| ------------------------------------ | ----------------------------------------- | --------------------- |
| `MONGODB_URI`                        | MongoDB connection string                 | ✅ Yes                |
| `JWT_SECRET`                         | Secret key for JWT token signing          | ✅ Yes                |
| `STRIPE_SECRET_KEY`                  | Stripe API secret key                     | ⚠️ Optional           |
| `STRIPE_ENDPOINT_WEBHOOK_SECRET_KEY` | Stripe webhook endpoint secret            | ⚠️ Optional           |
| `FRONTEND_URL`                       | Frontend application URL                  | ✅ Yes                |
| `PORT`                               | Backend server port                       | ❌ No (default: 8080) |
| `NODE_ENV`                           | Environment mode (development/production) | ❌ No                 |

## 🏃 Running the Project

### Development Mode

#### Start Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:8080`

#### Start Frontend Server

Open a new terminal window:

```bash
cd frontend
npm start
```

The frontend will start on `http://localhost:3000` and automatically open in your browser.

### Production Mode

#### Build Frontend

```bash
cd frontend
npm run build
```

#### Start Backend (Production)

```bash
cd backend
npm start
```

## 📁 Project Structure

```
e-commerce-mern-2024/
├── backend/
│   ├── config/
│   │   ├── db.js              # MongoDB connection configuration
│   │   └── stripe.js          # Stripe configuration
│   ├── controller/
│   │   ├── order/
│   │   │   ├── orderController.js
│   │   │   ├── paymentController.js
│   │   │   └── webhook.js
│   │   ├── product/
│   │   │   ├── filterProduct.js
│   │   │   ├── getCategoryProductOne.js
│   │   │   ├── getCategoryWiseProduct.js
│   │   │   ├── getProduct.js
│   │   │   ├── getProductDetails.js
│   │   │   ├── searchProduct.js
│   │   │   ├── updateProduct.js
│   │   │   └── uploadProduct.js
│   │   └── user/
│   │       ├── addToCartController.js
│   │       ├── addToCartViweProduct.js
│   │       ├── allUsers.js
│   │       ├── countAddToCartProduct.js
│   │       ├── deleteAddToCartProduct.js
│   │       ├── updateQuantity.js
│   │       ├── updateUser.js
│   │       ├── userDetails.js
│   │       ├── userLogout.js
│   │       ├── userSignIn.js
│   │       └── userSignUp.js
│   ├── helpers/
│   │   └── permission.js      # Permission helper functions
│   ├── middleware/
│   │   └── authToken.js       # JWT authentication middleware
│   ├── models/
│   │   ├── cartProduct.js     # Cart model
│   │   ├── orderProductModel.js
│   │   ├── productModel.js    # Product model
│   │   └── userModel.js       # User model
│   ├── routes/
│   │   └── index.js           # API routes
│   ├── .env                   # Environment variables
│   ├── index.js               # Entry point
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── context/           # React context providers
│   │   ├── helpers/           # Helper functions
│   │   ├── routes/            # Route configuration
│   │   ├── store/             # Redux store configuration
│   │   ├── common/            # Common utilities and API config
│   │   ├── assest/            # Static assets (images, etc.)
│   │   ├── App.js             # Main App component
│   │   └── index.js           # Entry point
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 📚 API Documentation

### Base URL

```
http://localhost:8080/api
```

### Authentication Endpoints

| Method | Endpoint        | Description              | Auth Required |
| ------ | --------------- | ------------------------ | ------------- |
| POST   | `/signup`       | Register a new user      | ❌ No         |
| POST   | `/signin`       | User login               | ❌ No         |
| GET    | `/userLogout`   | User logout              | ❌ No         |
| GET    | `/user-details` | Get current user details | ✅ Yes        |

### User Management Endpoints

| Method | Endpoint       | Description             | Auth Required | Admin Only |
| ------ | -------------- | ----------------------- | ------------- | ---------- |
| GET    | `/all-user`    | Get all users           | ✅ Yes        | ✅ Yes     |
| POST   | `/update-user` | Update user information | ✅ Yes        | ✅ Yes     |

### Product Endpoints

| Method | Endpoint               | Description                | Auth Required | Admin Only |
| ------ | ---------------------- | -------------------------- | ------------- | ---------- |
| GET    | `/get-product`         | Get all products           | ❌ No         | ❌ No      |
| POST   | `/product-details`     | Get product details        | ❌ No         | ❌ No      |
| POST   | `/upload-product`      | Create new product         | ✅ Yes        | ✅ Yes     |
| POST   | `/update-product`      | Update product             | ✅ Yes        | ✅ Yes     |
| GET    | `/get-categoryProduct` | Get products by category   | ❌ No         | ❌ No      |
| POST   | `/category-product`    | Get category-wise products | ❌ No         | ❌ No      |
| GET    | `/search`              | Search products            | ❌ No         | ❌ No      |
| POST   | `/filter-product`      | Filter products            | ❌ No         | ❌ No      |

### Cart Endpoints

| Method | Endpoint                 | Description               | Auth Required |
| ------ | ------------------------ | ------------------------- | ------------- |
| POST   | `/addtocart`             | Add product to cart       | ✅ Yes        |
| GET    | `/view-card-product`     | Get cart items            | ✅ Yes        |
| GET    | `/countAddToCartProduct` | Get cart item count       | ✅ Yes        |
| POST   | `/update-cart-product`   | Update cart item quantity | ✅ Yes        |
| POST   | `/delete-cart-product`   | Remove item from cart     | ✅ Yes        |

### Order & Payment Endpoints

| Method | Endpoint      | Description                    | Auth Required |
| ------ | ------------- | ------------------------------ | ------------- |
| POST   | `/checkout`   | Create Stripe checkout session | ✅ Yes        |
| POST   | `/webhook`    | Stripe webhook handler         | ❌ No         |
| GET    | `/order-list` | Get user orders                | ✅ Yes        |

### Response Format

#### Success Response

```json
{
  "data": {},
  "message": "Success message",
  "success": true,
  "error": false
}
```

#### Error Response

```json
{
  "message": "Error message",
  "error": true,
  "success": false
}
```

## 💻 Development

### Available Scripts

#### Backend Scripts

```bash
npm run dev    # Start development server with nodemon
npm start      # Start production server
npm test       # Run tests (not configured)
```

#### Frontend Scripts

```bash
npm start      # Start development server
npm run build  # Build for production
npm test       # Run tests
npm run eject  # Eject from Create React App (irreversible)
```

### Code Style

- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Maintain consistent indentation (2 spaces)

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error

```
Error: Cannot connect to MongoDB
```

**Solution:**

- Ensure MongoDB is running locally or check your MongoDB Atlas connection string
- Verify `MONGODB_URI` in `.env` file

#### 2. Port Already in Use

```
Error: Port 8080 is already in use
```

**Solution:**

- Change `PORT` in `.env` file
- Or kill the process using the port: `lsof -ti:8080 | xargs kill -9`

#### 3. JWT Token Error

```
Invalid or expired token
```

**Solution:**

- Clear browser cookies
- Login again to get a new token
- Check `JWT_SECRET` in `.env` file

#### 4. CORS Error

```
Access to fetch blocked by CORS policy
```

**Solution:**

- Verify `FRONTEND_URL` in backend `.env` matches your frontend URL
- Ensure backend CORS configuration is correct

#### 5. Module Not Found Error

```
Cannot find module 'ajv/dist/compile/codegen'
```

**Solution:**

```bash
cd frontend
npm install ajv@latest
```

#### 6. Payload Too Large (413 Error)

```
Failed to load resource: the server responded with a status of 413
```

**Solution:**

- The server already has a 50MB limit configured
- For larger files, increase the limit in `backend/index.js`

### Getting Help

If you encounter issues not listed here:

1. Check the [Issues](https://github.com/PunithAchintha2003/e-commerce-mern-2024/issues) page
2. Create a new issue with detailed error information
3. Include error logs and steps to reproduce

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic
- Test your changes before submitting
- Update documentation if needed

## 📄 License

This project is licensed under the ISC License.

## 👤 Contact

**Punith Achintha**

- GitHub: [@PunithAchintha2003](https://github.com/PunithAchintha2003)
- Project Link: [https://github.com/PunithAchintha2003/e-commerce-mern-2024](https://github.com/PunithAchintha2003/e-commerce-mern-2024)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Stripe](https://stripe.com/) - Payment processing
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

---

⭐ If you found this project helpful, please consider giving it a star!
