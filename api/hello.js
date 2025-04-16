const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // нужно для Neon

})


module.exports = async (req, res) => {
  console.log('Запрос на /api/db-test принят');
  try {
    const result = await pool.query('select firstname from public.test');
    console.log('Запрос выполнен успешно', result.rows);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Ошибка выполнения запроса:', err);
    res.status(500).json({ error: err.message });
  }
};
