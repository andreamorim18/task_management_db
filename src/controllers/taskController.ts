import { Request, Response } from 'express';

export class TaskController {
  async getTasks(req: Request, res: Response) {
    res.json({ tasks: [] });
  }

  async createTask(req: Request, res: Response) {
    res.status(201).json({ message: 'Task created' });
  }

  async updateTask(req: Request, res: Response) {
    res.json({ message: 'Task updated' });
  }
}
