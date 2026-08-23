import tasksRepository from "../repositories/tasks.repository.js";
import Task from "../models/Task.js";

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

    async create(data){
        const task = new Task(data)

        return await tasksRepository.create(task)
    }
}

export default new TasksService();
