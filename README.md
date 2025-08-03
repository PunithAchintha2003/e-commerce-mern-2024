
# e-commerce-mern-2024

An advanced, full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, product management, cart, order processing, and Stripe payment integration.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Features
- User authentication (Sign up, Login, JWT, Role-based access)
- Product listing, search, filtering, and details
- Admin panel for product and user management
- Shopping cart and order management
- Stripe payment integration
- Responsive UI with React and Tailwind CSS
- RESTful API with Express.js
- MongoDB for data storage

---

## Tech Stack
- **Frontend:** React.js, Redux Toolkit, React Router, Tailwind CSS
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Authentication:** JWT, bcryptjs
- **Payments:** Stripe

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PunithAchintha2003/e-commerce-mern-2024.git
   cd e-commerce-mern-2024
   ```

2. **Backend setup:**
   ```bash
   cd backend
   npm install
   # Create a .env file (see below)
   npm run dev
   ```

3. **Frontend setup:**
   ```bash
   cd ../frontend
   npm install
   npm start
   ```

### Environment Variables
Create a `.env` file in the `backend/` directory with the following:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000
```

---

## Folder Structure

```
e-commerce-mern-2024/
├── backend/
│   ├── config/           # DB and Stripe config
│   ├── controller/       # Route controllers
│   ├── helpers/          # Helper functions
│   ├── middleware/       # Auth middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── index.js          # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── helpers/      # Helper functions
│   │   ├── context/      # React context
│   │   └── ...
│   └── ...
└── README.md
```

---

## API Endpoints

### Auth
- `POST /api/user/signup` - Register new user
- `POST /api/user/signin` - Login
- `POST /api/user/logout` - Logout

### Products
- `GET /api/product` - List all products
- `GET /api/product/:id` - Get product details
- `POST /api/product` - Add product (admin)
- `PUT /api/product/:id` - Update product (admin)
- `DELETE /api/product/:id` - Delete product (admin)

### Cart
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `POST /api/order` - Place order
- `GET /api/order` - Get user orders
- `GET /api/order/all` - Get all orders (admin)

### Payments
- `POST /api/payment/stripe` - Stripe payment intent
- `POST /api/payment/webhook` - Stripe webhook

---

## Contributing
Contributions are welcome! Please open issues and submit pull requests for improvements or bug fixes.

---

## Contact
- **Author:** Punith Achintha
- **GitHub:** [PunithAchintha2003](https://github.com/PunithAchintha2003)

---
