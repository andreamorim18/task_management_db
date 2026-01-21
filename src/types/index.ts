export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthPayload {
  userId: number;
  email: string;
}

export interface JwtPayload {
  userId: number;
  email: string;
}
