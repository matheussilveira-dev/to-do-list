import express from 'express'
import tasksController from '../controllers/tasks.controller.js'
import { validateTaskId } from '../validators/tasks.validator.js'

const router = express()

router.get('/', tasksController.getAll)
router.get('/:id', validateTaskId, tasksController.getById)

export default router