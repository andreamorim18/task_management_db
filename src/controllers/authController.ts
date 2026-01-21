import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { z } from 'zod';

const authService = new AuthService();

const registerSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres')
});

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres')
});

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const validatedData = registerSchema.parse(req.body);
      const result = await authService.register(validatedData);
      res.status(201).json({
        message: '✅ Usuário criado com sucesso',
        user: result
      });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: '❌ Dados inválidos',
          details: error.errors
        });
      }
      res.status(400).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const validatedData = loginSchema.parse(req.body);
      const result = await authService.login(validatedData);
      res.json({
        message: '✅ Login realizado com sucesso',
        token: result.token,
        user: result.user
      });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: '❌ Credenciais inválidas',
          details: error.errors
        });
      }
      res.status(400).json({ error: error.message });
    }
  }

  async getProfile(req: any, res: Response) {
    try {
      const user = await authService.getUserById(req.user.id);
      res.json({
        message: '✅ Perfil encontrado',
        user
      });
    } catch (error: any) {
      res.status(500).json({ error: '❌ Erro ao buscar perfil' });
    }
  }
}
