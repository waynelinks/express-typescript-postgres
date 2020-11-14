import { Pool } from 'pg'
import { logger } from '@bigoncloud/logger'

import { DB_URI } from '../config'

const connectionString = DB_URI

export const db = new Pool({
  connectionString,
})

db.on('error', (err) => logger.error(`Database connection error: ${err}`))
