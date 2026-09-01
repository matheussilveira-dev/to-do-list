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

    async create(req, res, next){
        try {
            const task = req.body
            
            const createdTask = await tasksServices.create(task);

            res.status(201).json({"message": "Tarefa cadastrada com sucesso", data: createdTask})

        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next){
        try {
            const {id} = req.params
            const data = req.body

            const updatedTask = await tasksServices.update(id, data)

            res.status(200).json({
                message: "Tarefa atualizada com sucesso!",
                data: updatedTask
            })
        } catch (error) {
            next(error)
        }
    }

    async deleteTask(req, res, next){
        try {
            const {id} = req.params

            await tasksServices.deleteTask(id)

            res.status(200).json({
                message: "Tarefa deletada com sucesso!"
            })
        } catch (error) {
            next(error)
        }
    }
}

export default new TasksController();