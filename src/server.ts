import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import authRoutes from './routes/authRoutes';
import teamRoutes from './routes/teamRoutes';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Task Management API v2.0',
    version: '2.0.0',
    status: 'running',
    endpoints: {
      auth: '/api/auth',
      teams: '/api/teams',
      tasks: '/api/tasks'
    }
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Erro interno do servidor',
    message: err.message 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Rota não encontrada',
    available: ['/api/auth', '/api/teams', '/api/tasks']
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API v2.0 rodando na porta ${PORT}`);
  console.log(`📡 Acesse: http://localhost:${PORT}`);
  console.log(`📚 Documentação: http://localhost:${PORT}/docs`);
});

export default app;
