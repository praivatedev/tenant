# 🏠 Rentify – Rental Management Application

Rentify is a full-stack MERN rental management application that allows admins to manage rentals and tenants, while tenants can view their assigned rental information. Admins can register themselves and create tenant accounts, assign rentals, and manage all data. Tenants can only log in once their account is created by an admin.

# 📌 Features
# 🏢 Admin Panel

📝 Admin self-registration & login

👤 Create tenant accounts (tenants cannot self-register)

🗂 Assign rentals to tenants

⚙️ Full CRUD for tenants & rentals

📄 Manage rental details

# 🗝 Client Panel (Tenant)

🔑 Tenant login (only after admin creation)

📃 View assigned rental information

📊 Access rental history and details

# 🛠 Tech Stack

🗄 MongoDB – Database

⚡ Express.js – Backend framework

🖥 React.js – Frontend UI

🌐 Node.js – Server environment

🐳 Docker & Docker Compose – Containerization

# 🔐 Authentication

📝 Admin self-registration & login

🔑 Tenant login (admin-created accounts)

🛡 JWT-based secure authentication

# 🔧 Environment Variables

Create a .env file in your server/ directory:

PORT=4050
MONGO_URL=mongodb://mongo:27017/rentify
JWT_SECRET=your_secret_key

Create .env files for client and admin (React apps) with:

VITE_API_URL=http://localhost:4050

⚠️ Do NOT commit .env files to GitHub

📦 Running the App with Docker

The project is fully containerized using Docker Compose.

Requirements

🐳 Docker

🐙 Docker Compose

Check versions:

docker --version
docker-compose --version
Steps – Build and Start

From the project root:

docker-compose up --build

This will start the following services:

🗄 MongoDB

⚡ Backend server (4050)

🖥 Client panel (5173)

🏢 Admin panel (5174)

# 🖥 Ports

🏢 Admin Panel: http://localhost:5174

🗝 Client Panel: http://localhost:5173

⚡ Backend API: http://localhost:4050

🗄 MongoDB: 27017

# 📁 Project Structure
rentify/
├─ server/       # Backend API
├─ client/       # Tenant panel (React)
├─ admin/        # Admin panel (React)
├─ docker-compose.yml
└─ README.md
# 🔗 API Endpoints
🏢 Admin Authentication

POST /api/auth/admin/register – Admin registration

POST /api/auth/admin/login – Admin login

# 👤 Tenant Management (Admin only)

POST /api/tenants – Create tenant

GET /api/tenants/:id – Fetch tenant details

# 🗂 Rental Management

POST /api/rentals – Admin assigns rental

GET /api/rentals/:tenantId – Tenant fetches rental data

# ⚙️ User Roles
# 🏢 Admin

📝 Can self-register

👤 Create tenants & assign rentals

🗂 Manage rental and tenant data

# 🗝 Tenant

🔑 Cannot self-register

🔑 Login only after account creation by admin

📃 View assigned rental info

📈 Future Improvements

✉️ Email notifications for new tenants

💰 Payment & rent tracking

📊 Analytics dashboards for admins

📝 Contributing

# 