import tasksRepository from "../repositories/tasksRepository.js";

class TasksService {

    async getAll() {
        const tasks = await tasksRepository.getAll();
        return tasks;
    }
}

export default new TasksService();
