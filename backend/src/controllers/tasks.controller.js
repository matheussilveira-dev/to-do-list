import tasksServices from "../services/tasks.service.js";

class TasksController {

    async getAll(req, res, next) {
        try {
            const tasks = await tasksServices.getAll();
            res.json(tasks);
        } catch (error) {
           next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const task = await tasksServices.getById(id);
            res.json(task);
        } catch (error) {
            next(error);
        }
    }
}

export default new TasksController();