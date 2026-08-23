import express from 'express'
import tasksController from '../controllers/tasksController.js'

const router = express()

router.get('/', tasksController.getAll)

export default router