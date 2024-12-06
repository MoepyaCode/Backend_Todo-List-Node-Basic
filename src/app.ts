import cors from 'cors'
import express from 'express'
import { TodoRouter } from './routes'

const app = express()

/**
 * Middleware
 */
app.use(cors())
app.use(express.json())

/**
 * End Points
 */
app.use('/todos', TodoRouter)

export default app