import { AuthService } from '../../src/services/authService';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('deve registrar usuário', async () => {
    const userData = { name: 'Test', email: 'test@test.com', password: '123' };
    const result = await authService.register(userData);
    expect(result).toHaveProperty('message');
  });

  it('deve fazer login', async () => {
    const credentials = { email: 'test@test.com', password: '123' };
    const result = await authService.login(credentials);
    expect(result).toHaveProperty('token');
  });
});
