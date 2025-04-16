import { VercelRequest, VercelResponse } from '@vercel/node'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const result = await pool.query('SELECT NOW()')
    res.status(200).json({ time: result.rows[0].now })
  } catch (err) {
    res.status(500).json({ error: (err as Error).message })
  }
}