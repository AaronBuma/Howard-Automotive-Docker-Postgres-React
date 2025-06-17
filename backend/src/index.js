import express from 'express';
import { Pool } from 'pg';
import { config } from 'dotenv';
config();

const app = express();
const port = process.env.PORT || 4000;

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'howard',
  port: 5432,
});

app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'ok', time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/api/cars', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, make, model, year, color, owner_id, image_url
      FROM cars
      ORDER BY year DESC, make ASC, model ASC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name, location, date, description
      FROM events
      ORDER BY date DESC, name ASC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/api/sponsors', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name, logo_url, website_url, description
      FROM sponsors
      ORDER BY name ASC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/api/services', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name, description, price
      FROM services
      ORDER BY name ASC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});