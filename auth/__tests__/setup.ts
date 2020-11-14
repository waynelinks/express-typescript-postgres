import { db } from '../src/db'
import { DB_TABLE } from '../src/config'

beforeEach(async () => {
  await db.query(`TRUNCATE TABLE ${DB_TABLE}`)
})

afterEach(async () => {
  await db.query(`TRUNCATE TABLE ${DB_TABLE}`)
})
