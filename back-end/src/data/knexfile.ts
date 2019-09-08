import pg from 'pg';
// Forces Postgres to use SSL
pg.defaults.ssl = true;

import * as dotenv from "dotenv";
import * as path from "path";

const env_file = path.resolve(process.cwd(), '../..', `.env.development`);
const config = dotenv.config({path: env_file});

// Handle errors
if (config.error) throw config.error;

// Extract env variable
const env = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: `${env.DB_PG_URL}`,
    ssl: true
  }
};
