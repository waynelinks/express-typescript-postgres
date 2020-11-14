import 'express-async-errors'
import express from 'express'

import { BASE_API_V1 } from './config'
import { routes } from './routes/v1'

const app = express()

app.use(`${BASE_API_V1}`, routes)

export { app }
