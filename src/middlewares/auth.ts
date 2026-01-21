import { Request, Response, NextFunction } from 'express';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  req.user = { id: 1 };
  next();
};

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  next();
};
