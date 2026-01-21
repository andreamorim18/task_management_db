export class AuthService {
  async register(userData: any) {
    return { message: 'User registered', user: userData };
  }

  async login(credentials: any) {
    return { message: 'User logged in', token: 'fake-token' };
  }

  async getUserById(id: number) {
    return { id, name: 'Test User', email: 'test@example.com' };
  }
}
