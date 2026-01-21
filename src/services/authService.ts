import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePassword } from '../utils/password';
import { generateToken, verifyToken } from '../utils/jwt';

const prisma = new PrismaClient();

export class AuthService {
  async register(userData: { name: string; email: string; password: string }) {
    const existingUser = await prisma.user.findUnique({
      where: { email: userData.email }
    });

    if (existingUser) {
      throw new Error('❌ Email já cadastrado');
    }

    const hashedPassword = await hashPassword(userData.password);

    const user = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
        role: 'MEMBER'
      }
    });

    const token = generateToken({ userId: user.id, email: user.email });

    return {
      message: '✅ Usuário criado com sucesso',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    };
  }

  async login(credentials: { email: string; password: string }) {
    const user = await prisma.user.findUnique({
      where: { email: credentials.email }
    });

    if (!user) {
      throw new Error('❌ Email ou senha inválidos');
    }

    const isValidPassword = await comparePassword(credentials.password, user.password);

    if (!isValidPassword) {
      throw new Error('❌ Email ou senha inválidos');
    }

    const token = generateToken({ userId: user.id, email: user.email });

    return {
      message: '✅ Login realizado com sucesso',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token
    };
  }

  async getUserById(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    if (!user) {
      throw new Error('❌ Usuário não encontrado');
    }

    return user;
  }

  async verifyToken(token: string) {
    try {
      const decoded = verifyToken(token);
      return await this.getUserById(decoded.userId);
    } catch (error) {
      throw new Error('❌ Token inválido');
    }
  }
}
