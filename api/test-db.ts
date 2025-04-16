import { NextApiRequest, NextApiResponse } from 'next'
import { Pool } from 'pg'

// Подключение к базе через переменную окружения
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Важно для Neon
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await pool.query('select FirstName from TEST') // <-- замени на своё
    res.status(200).json(result.rows)
  } catch (err) {
    res.status(500).json({ error: (err as Error).message })
  }
}
