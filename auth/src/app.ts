import 'express-async-errors'
import express from 'express'
import { errorHandler, middleware, notFound } from '@bigoncloud/middleware'

import { BASE_API_V1 } from './config'
import { routes } from './routes/v1'

const app = express()

middleware(app, express)

app.use(`${BASE_API_V1}`, routes)

notFound(app)
app.use(errorHandler)

export { app }
