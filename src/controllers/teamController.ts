import { Request, Response } from 'express';

export class TeamController {
  async getTeams(req: Request, res: Response) {
    res.json({ teams: [] });
  }

  async createTeam(req: Request, res: Response) {
    res.status(201).json({ message: 'Team created' });
  }

  async addMember(req: Request, res: Response) {
    res.json({ message: 'Member added' });
  }
}
