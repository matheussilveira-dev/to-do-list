import tasksRepository from "../repositories/tasks.repository.js";

class TasksService {

    async getAll() {
        const tasks = await tasksRepository.getAll();
        return tasks;
    }

    async getById(id) {
        const task = await tasksRepository.getById(id);

        if(!task) {
            throw new Error(`A task com o ID ${id} não foi encontrada.`);
        }

        return task;
    }
}

export default new TasksService();
