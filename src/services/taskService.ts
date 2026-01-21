export class TaskService {
  async getTasks() {
    return [];
  }

  async createTask(taskData: any) {
    return { id: 1, ...taskData };
  }

  async updateTask(id: number, data: any) {
    return { id, ...data };
  }
}
