const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // нужно для Neon
})

module.exports = async (req, res) => {
  try {
    const result = await pool.query('select firstname from public.test')
    res.status(200).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
