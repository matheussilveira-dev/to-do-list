import tasksServices from "../services/tasksServices.js";

class TasksController {

    async getAll(req, res, next) {
        try {
            const tasks = await tasksServices.getAll();
            res.json(tasks);
        } catch (error) {
           next(error);
        }
    }
}

export default new TasksController();