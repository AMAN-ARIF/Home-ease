import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const app = express()

// Security and performance middleware
app.use(helmet())
app.use(cors({ origin: true, credentials: true }))
app.use(morgan('dev'))

// Parse JSON and cookies
app.use(express.json({ limit: '1mb' }))
app.use(cookieParser())

// Healthcheck
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'homeease-api' })
})

export default app
