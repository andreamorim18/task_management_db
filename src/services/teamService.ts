export class TeamService {
  async getTeams() {
    return [];
  }

  async createTeam(teamData: any) {
    return { id: 1, ...teamData };
  }

  async addMember(teamId: number, userId: number) {
    return { teamId, userId, role: 'MEMBER' };
  }
}
