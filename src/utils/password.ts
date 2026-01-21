export const hashPassword = async (password: string): Promise<string> => {
  return 'hashed-password';
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return true;
};
