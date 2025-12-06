# Tweeky Queeky Shop

## Live Demo: https://mern-e-commerce-tweeky-queeky.onrender.com

A modern, full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js) featuring a sleek teal/cyan design theme, dark mode support, and comprehensive shopping cart functionality.



<img width="1882" height="932" alt="image" src="https://github.com/user-attachments/assets/188067cf-dc23-4dc7-8303-86b372bf09d7" />
<img width="1901" height="935" alt="image" src="https://github.com/user-attachments/assets/f2750031-638c-419e-a03b-7c2780543b5f" />


<img width="1886" height="918" alt="image" src="https://github.com/user-attachments/assets/af8d1d6d-88a5-4187-80f3-71c9b747523d" />


<img width="1912" height="924" alt="image" src="https://github.com/user-attachments/assets/28fe7516-49ea-43b2-9712-47787b2d0202" />

# Pay by Paypal or credit card:
<img width="1906" height="901" alt="image" src="https://github.com/user-attachments/assets/ea5a51e4-7db8-45a4-9a87-e78ceeb6ccaa" />


<img width="1891" height="878" alt="image" src="https://github.com/user-attachments/assets/1acef509-c3a9-4907-a96f-65815560e5e1" />

## ✨ Features

### Customer Features
- 🛍️ Browse products with beautiful card layouts
- 🔍 Real-time search with debouncing
- 🛒 Add to cart with instant toast notifications
- 💳 Complete checkout process with PayPal integration
- 👤 User authentication and profile management
- 📦 Order history and tracking
- ⭐ Product reviews and ratings
- 🎨 **Dark mode toggle** for comfortable viewing
- 📱 Fully responsive design

### Admin Features
- 📊 Admin dashboard
- 📦 Product management (CRUD operations)
- 👥 User management
- 🚚 Order management and status updates
- 📈 Top products carousel

### Technical Features
- 🎨 Modern teal/cyan gradient theme
- 🌙 Dark mode with localStorage persistence
- 🔄 Redux Toolkit for state management
- 🔐 JWT authentication with HTTP-only cookies
- 📸 Image upload functionality
- 🐳 Docker support for easy deployment
- 🚀 Production-ready build optimization

## 🚀 Quick Start

### Prerequisites
- Node.js (v20 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/taroserigano/MERN-E-Commerce-ReduxTOOL-Kit-MongoDB.git
cd MERN-E-Commerce-ReduxTOOL-Kit-MongoDB
```

2. **Install dependencies**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
npm install --prefix frontend
```

3. **Environment Setup**

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
PAYPAL_CLIENT_ID=your_paypal_client_id
```

4. **Seed Database (Optional)**
```bash
# Import sample data
npm run data:import

# Destroy sample data
npm run data:destroy
```

5. **Run the application**

**Development mode** (runs both frontend and backend):
```bash
npm run dev
```
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

**Production mode**:
```bash
# Build frontend
npm run build

# Start production server
NODE_ENV=production npm start
```
- Access at: http://localhost:5000

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Set environment variables**
```bash
export MONGO_URI="your_mongodb_uri"
export JWT_SECRET="your_secret"
export PAYPAL_CLIENT_ID="your_paypal_client_id"
```

2. **Build and run**
```bash
docker-compose up --build
```

Access at: http://localhost:5000

### Using Docker CLI

```bash
# Build image
docker build -t tweeky-queeky-shop .

# Run container
docker run -p 5000:5000 \
  -e NODE_ENV=production \
  -e MONGO_URI="your_mongodb_uri" \
  -e JWT_SECRET="your_secret" \
  -e PAYPAL_CLIENT_ID="your_paypal_client_id" \
  tweeky-queeky-shop
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run server` | Start backend with nodemon (hot reload) |
| `npm run client` | Start frontend dev server only |
| `npm run dev` | Start both frontend and backend concurrently |
| `npm run build` | Build frontend for production |
| `npm run data:import` | Import sample products and users |
| `npm run data:destroy` | Delete all data from database |

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **React Bootstrap** - UI components
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **Axios** - HTTP client
- **PayPal React SDK** - Payment integration

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **cookie-parser** - Cookie parsing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nodemon** - Development auto-reload
- **Concurrently** - Run multiple commands

## 📁 Project Structure

```
tweeky-queeky-shop/
├── backend/
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── data/          # Seed data
│   ├── middleware/    # Custom middleware
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── utils/         # Helper functions
│   ├── seeder.js      # Database seeder
│   └── server.js      # Entry point
├── frontend/
│   ├── public/        # Static assets
│   └── src/
│       ├── assets/    # Styles and images
│       ├── components/# React components
│       ├── screens/   # Page components
│       ├── slices/    # Redux slices
│       └── utils/     # Helper functions
├── uploads/           # Uploaded images
├── Dockerfile         # Docker configuration
├── docker-compose.yml # Docker Compose config
└── package.json       # Root dependencies
```

## 🎨 Theme & Styling

Tweeky Queeky Shop features a modern design with:
- **Primary Colors**: Teal to Blue gradient (#06b6d4 → #3b82f6)
- **Dark Mode**: Toggle-able dark theme with localStorage persistence
- **Custom Logo**: "TQ" branded logo with gradient background
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Hover effects and transitions

## 🔐 Default Admin Account

After running `npm run data:import`:
- **Email**: admin@email.com
- **Password**: 123456

## 🌐 Deployment

### Deploy to Render

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Create new **Web Service**
4. Select your repository
5. Configure:
   - **Runtime**: Docker
   - **Port**: 5000
   - **Environment Variables**:
     - `NODE_ENV=production`
     - `MONGO_URI=your_mongodb_uri`
     - `JWT_SECRET=your_secret`
     - `PAYPAL_CLIENT_ID=your_paypal_client_id`

### Deploy to Railway

1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select repository
4. Add environment variables (same as above)
5. Railway auto-detects Node.js and deploys

## 📝 API Documentation

### Authentication
- `POST /api/users/auth` - Login user
- `POST /api/users/logout` - Logout user
- `POST /api/users` - Register user

### Products
- `GET /api/products` - Get all products (with pagination)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/myorders` - Get user orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order to paid
- `PUT /api/orders/:id/deliver` - Update order to delivered (Admin)

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Taro Serigano**
- GitHub: [@taroserigano](https://github.com/taroserigano)
- Repository: [MERN-E-Commerce-ReduxTOOL-Kit-MongoDB](https://github.com/taroserigano/MERN-E-Commerce-ReduxTOOL-Kit-MongoDB)


---

Built with ❤️ using the MERN stack
