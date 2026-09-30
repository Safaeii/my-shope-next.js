# My Shope — Next.js E-commerce
![my stor Preview](public/images//my%20stor-preview.png)
A modern e-commerce website built with **Next.js**, **React**, **JavaScript**, and **Tailwind CSS**.

This project was created as a learning and portfolio project to practice building a complete web application with Next.js App Router.

## 🚀 Technologies

* Next.js 16
* React
* JavaScript
* Tailwind CSS
* Next.js App Router
* React Context API
* Fetch API
* REST API Routes
* Git & GitHub

## ✨ Features

* 🏠 Home page
* 🛍️ Products page
* 🔎 Product search
* 🏷️ Product category filtering
* 📦 Product details
* 🛒 Shopping cart
* 💳 Checkout page
* 📋 Orders page
* 🔐 Login page
* 📝 Sign Up page
* ℹ️ About page
* 📞 Contact page
* ⏳ Loading UI
* ⚠️ Error UI
* 📱 Responsive design
* 🔗 Dynamic product and order routes

## 📂 Project Structure

```text
app/
├── Products/
│   ├── page.jsx
│   └── [id]/
│       └── page.jsx
│
├── cart/
│   └── page.jsx
│
├── checkout/
│   └── page.jsx
│
├── orders/
│   ├── page.jsx
│   ├── loading.jsx
│   ├── error.jsx
│   └── [id]/
│       └── page.jsx
│
├── login/
│   └── page.jsx
│
├── signup/
│   └── page.jsx
│
├── about/
│   └── page.jsx
│
├── Contact/
│   └── page.jsx
│
├── api/
│   ├── login/
│   │   └── route.js
│   ├── orders/
│   │   └── route.js
│   └── users/
│       └── route.js
│
├── data/
│   └── products.js
│
└── Componenets/
    ├── Header.jsx
    ├── Footer.jsx
    └── ProductCard.jsx

context/
└── CartContext.jsx
```

## 🛒 Shopping Cart

The shopping cart is managed using **React Context API**.

The project includes:

* Add product to cart
* Remove product from cart
* Display cart item count
* Calculate total price
* Navigate to checkout

## 🔎 Product Search & Filter

The Products page includes:

* Search products by name
* Filter products by category
* Responsive product grid

## 🔌 API Routes

The project uses Next.js Route Handlers for practicing API development.

### Orders

```text
GET  /api/orders
POST /api/orders
```

### Users

```text
GET  /api/users
POST /api/users
```

### Login

```text
POST /api/login
```

These APIs are currently implemented for learning purposes and use in-memory data rather than a database.

## 🧭 Dynamic Routes

The project uses Next.js dynamic routes.

Example:

```text
/Products/[id]
/orders/[id]
```

For example:

```text
/Products/1
/orders/1
```

## ⚙️ Installation

Clone the repository:

```bash
git clone git@github.com:Safaeii/my-shope-next.js.git
```

Go to the project directory:

```bash
cd my-shope-next.js
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

The project currently builds successfully with Next.js.

## 📱 Responsive Design

The interface is designed to work across different screen sizes using Tailwind CSS responsive utilities.

## 📚 Learning Goals

This project was built to practice:

* Next.js App Router
* Pages and layouts
* Dynamic routes
* Client Components
* Server-side API Routes
* React Hooks
* `useState`
* `useEffect`
* `useContext`
* React Context API
* Forms
* Fetch API
* Search and filtering
* Loading and error UI
* Responsive design
* Git and GitHub

## ⚠️ Note

This is an educational and portfolio project.

Authentication and API data are currently implemented as a learning exercise without a production database or full authentication system.

## 👨‍💻 Author

**Safaeii**

GitHub:

`https://github.com/Safaeii`
