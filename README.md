# Reactions 😍 - Fullstack Docker app

A simple full-stack emoji reaction web app built with React (Vite) on the frontend, Express.js on the backend, and MariaDB for persistence. It allows users to react to content using one of five emojis. The app displays live reaction counts and stores them in the database.

## ✨ Features

- Vite + React frontend served via Nginx
- Express backend with REST API
- MariaDB database to store emoji counts
- Docker Compose orchestration for services
- Load balancing across multiple backend replicas via Nginx

## 📦 Requirements
- `docker`, `docker-compose` and `npm` packages

## ▶️ How to run
1. Create a data directory for MariaDB
```bash
mkdir mariadb_data
```
2. Install backend dependencies
```bash
cd backend  
npm install
```
3. Build the frontend
```bash
cd ../frontend  
npm install  
npm run build
```
4. **Start all services** In the root directory:
```bash
docker compose up -d
```

This will start:

- Nginx serving the built frontend on http://localhost

- Express backend on http://localhost:3000

- MariaDB database initialized with emoji reaction data

## 🌐 Access the App

Open your browser and go to: http://localhost

## 🗃️ How It Works

- On load, the frontend requests current emoji counts from the backend (`/reactions`)
- Clicking an emoji sends a POST to `/react` on the backend
- The backend increments the reaction count in the MariaDB database
- The UI updates immediately with the new count

## 🧪 Tech Stack

- **Frontend**: React (Vite), served via Nginx
- **Backend**: Node.js, Express (deployed in 3 replicas)
- **Database**: MariaDB
- **Containerization**: Docker, Docker Compose
- **Networking**: Internal Docker bridge network (app-network)
- **Load Balancer**: Nginx proxies traffic to multiple backend containers

## 🛠 Troubleshooting

- Rebuild and restart:  
```bash
docker compose down -v && docker compose up --build
```

## 📁 Folder Structure
```
.  
├── backend        # Express backend with Dockerfile and init logic  
├── db             # SQL init script  
├── frontend       # Vite React frontend  
├── nginx          # Nginx config for serving frontend and proxying API  
├── docker-compose.yml  
└── README.md
```