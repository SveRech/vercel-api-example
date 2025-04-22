const { Pool } = require('pg')

const pool = new Pool({
  connectionString: 'postgres://neondb_owner:npg_zw7pxdRr5bTk@ep-polished-hall-a2r6iwod-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false }
})

pool.query('select firstname from public.test LIMIT 1')
  .then(res => console.log(res.rows))
  .catch(err => console.error('Ошибка:', err.message))

