import express from 'express'
import tasksRouter from './routes/tasks.routes.js'
import erroHandler from './middleware/errorHandler.middleware.js'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors());

app.use('/tasks', tasksRouter)

app.use(erroHandler)

export default app      