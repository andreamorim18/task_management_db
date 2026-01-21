import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        role: string;
      };
    }
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: '❌ Token não fornecido',
        message: 'Formato: Bearer <token>'
      });
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = verifyToken(token);
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });

    if (!user) {
      return res.status(401).json({
        error: '❌ Usuário não encontrado'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      error: '❌ Token inválido',
      message: error.message
    });
  }
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== 'ADMIN') {
    return res.status(403).json({
      error: '❌ Acesso negado',
      message: 'Apenas administradores podem acessar este recurso'
    });
  }
  
  next();
};
