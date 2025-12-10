# Tweeky Queeky Shop

Modern full-stack **MERN** e‑commerce platform with **Redux Toolkit**, **PayPal/credit-card checkout**, and **Dockerized** deployment. Features a teal/cyan gradient UI, dark mode, and a production-ready architecture.

## 🔗 Live Demo

**Live:** https://mern-e-commerce-tweeky-queeky.onrender.com  

> Use the default admin credentials (below) after seeding to explore the full back-office experience.

---

## 🖼️ Product Screens

<img width="1882" height="932" alt="image" src="https://github.com/user-attachments/assets/188067cf-dc23-4dc7-8303-86b372bf09d7" />
<img width="1901" height="935" alt="image" src="https://github.com/user-attachments/assets/f2750031-638c-419e-a03b-7c2780543b5f" />
<img width="1886" height="918" alt="image" src="https://github.com/user-attachments/assets/af8d1d6d-88a5-4187-80f3-71c9b747523d" />
<img width="1912" height="924" alt="image" src="https://github.com/user-attachments/assets/28fe7516-49ea-43b2-9712-47787b2d0202" />

### 💳 Pay with PayPal or Credit Card

<img width="1906" height="901" alt="image" src="https://github.com/user-attachments/assets/ea5a51e4-7db8-45a4-9a87-e78ceeb6ccaa" />
<img width="1891" height="878" alt="image" src="https://github.com/user-attachments/assets/1acef509-c3a9-4907-a96f-65815560e5e1" />

---

## ✨ Core Capabilities

### 🛍️ Customer Experience

- 🧩 **Product discovery** with clean card layouts and responsive grid
- 🔍 **Real-time search** with debouncing for snappy UX
- 🛒 **Cart UX** with instant toast notifications
- 💳 **End-to-end checkout** with PayPal integration
- 👤 **User accounts**: auth, profile, address, and password management
- 📦 **Order history & tracking**
- ⭐ **Product reviews & ratings**
- 🌙 **Dark mode toggle** (state persisted via `localStorage`)
- 📱 **Fully responsive**, mobile-first layout

### 🛠️ Admin & Back Office

- 📊 **Admin dashboard** surface-level store health
- 📦 **Product management**: full CRUD for catalog
- 👥 **User management**: promote/demote, manage accounts
- 🚚 **Order management**: lifecycle + status updates (paid / delivered)
- 📈 **Highlighting top products** via carousel

### ⚙️ Technical Features

- 🎨 **Modern teal → cyan → blue gradient theme**
- 🌗 **Client-side dark mode** with persistence
- 🔄 **Redux Toolkit** for predictable state modeling
- 🔐 **JWT auth** stored in HTTP-only cookies
- 📸 **Image upload** with Multer and static serving
- 🐳 **Docker & Docker Compose** for dev and prod
- 🚀 **Production build pipeline** for optimized React bundles

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** `>= 20`
- **MongoDB** (Atlas or local instance)
- **npm** or **yarn**
- Optional: **Docker** + **Docker Compose**

### 1. Clone the Repository

```bash
git clone https://github.com/taroserigano/MERN-E-Commerce-ReduxTOOL-Kit-MongoDB.git
cd MERN-E-Commerce-ReduxTOOL-Kit-MongoDB
```

### 2. Install Dependencies

```bash
# Root (backend, tooling, scripts)
npm install

# Frontend
npm install --prefix frontend
```

### 3. Environment Configuration

Create a `.env` in the project root:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
PAYPAL_CLIENT_ID=your_paypal_client_id
```

> For production, use strong secrets and environment-specific URIs.

### 4. Seed the Database (Optional)

```bash
# Import sample users/products (includes an admin user)
npm run data:import

# Roll back seed data
npm run data:destroy
```

### 5. Run the Application

**Development (frontend + backend concurrently):**

```bash
npm run dev
```

- Frontend: http://localhost:3000  
- Backend: http://localhost:5000  

**Production-like (local build):**

```bash
# Build frontend assets
npm run build

# Serve with Node in production mode
NODE_ENV=production npm start
```

- App: http://localhost:5000  

---

## 🐳 Docker Deployment

### Option 1: Docker Compose (Recommended)

1. Export env vars:

```bash
export MONGO_URI="your_mongodb_uri"
export JWT_SECRET="your_secret"
export PAYPAL_CLIENT_ID="your_paypal_client_id"
```

2. Build and run:

```bash
docker-compose up --build
```

- App: http://localhost:5000  

### Option 2: Docker CLI

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

---

## 📦 Available NPM Scripts

| Command              | Description                                  |
| -------------------- | -------------------------------------------- |
| `npm start`          | Start backend in production mode             |
| `npm run server`     | Start backend with nodemon (hot reload)      |
| `npm run client`     | Start frontend dev server only               |
| `npm run dev`        | Start frontend & backend concurrently        |
| `npm run build`      | Build frontend for production                |
| `npm run data:import`| Seed DB with sample products & users         |
| `npm run data:destroy` | Wipe database collections                  |

---

## 🛠️ Tech Stack

### Frontend

- **React 18.2**
- **Redux Toolkit** + Redux DevTools integration
- **React Router** for SPA navigation
- **React Bootstrap** for layout and components
- **React Icons** for iconography
- **React Toastify** for notifications
- **Axios** as HTTP client
- **PayPal React SDK** for payments

### Backend

- **Node.js** + **Express**
- **MongoDB** with **Mongoose** ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Multer** for file uploads
- **cookie-parser** for HTTP-only cookie support

### DevOps & Tooling

- **Docker** & **Docker Compose**
- **Nodemon** for live-reload in dev
- **Concurrently** to run multiple dev processes

---

## 📁 Project Structure

```text
tweeky-queeky-shop/
├── backend/
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── data/           # Seed data
│   ├── middleware/     # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/          # Helper utilities
│   ├── seeder.js       # Database seeding script
│   └── server.js       # Backend entrypoint
├── frontend/
│   ├── public/         # Static assets
│   └── src/
│       ├── assets/     # Styles, images
│       ├── components/ # Reusable React components
│       ├── screens/    # Route-level pages
│       ├── slices/     # Redux slices
│       └── utils/      # Frontend helpers
├── uploads/            # Uploaded images
├── Dockerfile          # Docker image definition
├── docker-compose.yml  # Multi-service orchestration
└── package.json        # Root package + scripts
```

---

## 🎨 UI / UX Theme

Tweeky Queeky Shop ships with a cohesive design system:

- 🎨 **Primary gradient:** `#06b6d4 → #3b82f6`
- 🌑 **Dark mode:** one-click toggle with persisted preference
- 🪪 **Branding:** TQ logo with gradient identity
- 📱 **Responsive layout:** optimized for mobile → desktop
- ✨ **Micro-interactions:** hover states and smooth transitions

---

## 🔐 Default Admin Credentials

After running `npm run data:import`:

- **Email:** `admin@email.com`
- **Password:** `123456`

Use these only in development. Replace or remove seeded users in any real environment.

---

## 🌐 Deployment Targets

### Render

1. Push code to GitHub
2. Go to [Render](https://render.com)
3. Create a new **Web Service**
4. Select this repository
5. Configure:
   - **Runtime:** Docker  
   - **Port:** `5000`  
   - **Environment variables:**
     - `NODE_ENV=production`
     - `MONGO_URI=your_mongodb_uri`
     - `JWT_SECRET=your_secret`
     - `PAYPAL_CLIENT_ID=your_paypal_client_id`

### Railway

1. Go to [Railway](https://railway.app)
2. **New Project → Deploy from GitHub repo**
3. Select this repo
4. Add the same environment variables as above
5. Railway will auto-detect Node.js and build/deploy

---

## 📝 API Surface (REST)

### Authentication

- `POST /api/users/auth` — Login user
- `POST /api/users/logout` — Logout user
- `POST /api/users` — Register new user

### Products

- `GET /api/products` — List products (supports pagination)
- `GET /api/products/:id` — Get single product
- `POST /api/products` — Create product (Admin)
- `PUT /api/products/:id` — Update product (Admin)
- `DELETE /api/products/:id` — Delete product (Admin)

### Orders

- `POST /api/orders` — Create order
- `GET /api/orders/myorders` — List orders for current user
- `GET /api/orders/:id` — Get order by ID
- `PUT /api/orders/:id/pay` — Mark order as paid
- `PUT /api/orders/:id/deliver` — Mark order as delivered (Admin)

---

## 📄 License

Released under the **MIT License**.

---

## 👤 Author

**Taro Serigano**

- GitHub: [@taroserigano](https://github.com/taroserigano)
- Repo: [MERN-E-Commerce-ReduxTOOL-Kit-MongoDB](https://github.com/taroserigano/MERN-E-Commerce-ReduxTOOL-Kit-MongoDB)

---

Built with ❤️ on the **MERN** stack.
