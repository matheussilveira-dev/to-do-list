import express from 'express'
import tasksController from '../controllers/tasks.controller.js'

import { taskIdSchema, createTaskSchema, updateTaskSchema } from '../validators/tasks.validator.js'
import { validate } from '../middleware/validate.middleware.js'

const router = express()

router.get('/', tasksController.getAll)
router.get('/:id', validate(taskIdSchema, 'params'), tasksController.getById)
router.post('/', validate(createTaskSchema, "body"), tasksController.create)
router.put('/:id', validate(taskIdSchema, "params"), validate(updateTaskSchema, "body"), tasksController.update)
router.delete('/:id', validate(taskIdSchema, "params"), tasksController.deleteTask)

export default router