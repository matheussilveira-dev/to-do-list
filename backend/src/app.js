import express from 'express'
import router from './routes/tasks.routes.js'
import erroHandler from './middleware/errorHandler.js'

const app = express()

app.use(express.json())


app.use(erroHandler)

export default app      