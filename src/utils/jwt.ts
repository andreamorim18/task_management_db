export const generateToken = (payload: any): string => {
  return 'fake-jwt-token';
};

export const verifyToken = (token: string): any => {
  return { userId: 1, email: 'test@example.com' };
};
