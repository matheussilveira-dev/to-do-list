import express from 'express'
import tasksController from '../controllers/tasks.controller.js'
import { validateId } from '../validators/tasks.validator.js'

const router = express()

router.get('/', tasksController.getAll)
router.get('/:id', validateId, tasksController.getById)
router.post('/', tasksController.create)
router.put('/:id', validateId, tasksController.update)
router.delete('/:id', validateId, tasksController.deleteTask)

export default router