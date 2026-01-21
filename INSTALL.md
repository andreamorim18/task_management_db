# 🚀 Instalação

## 1. Pré-requisitos
- Node.js 18+
- Docker

## 2. Com Docker
```bash
docker-compose up -d
```

## 3. Manual
```bash
npm install
npm run dev
```

## 4. Acessar
- API: http://localhost:3333
- Health: GET /

## 5. Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile
- GET /api/teams
- POST /api/teams
- GET /api/tasks
- POST /api/tasks
