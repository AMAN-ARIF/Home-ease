import 'dotenv/config'
import http from 'http'
import app from './app.js'
import { connectToDatabase } from './db.js'

const PORT = Number(process.env.PORT) || 5000

async function start() {
  try {
    await connectToDatabase()
    const server = http.createServer(app)
    server.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`API listening on http://localhost:${PORT}`)
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to start server:', err)
    process.exit(1)
  }
}

start()
