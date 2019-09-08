import knex from "knex";
import pg from "pg";
import {DB_PG_URL} from './env';
pg.defaults.ssl = true;

const db = knex({
    client: "pg",
    connection: DB_PG_URL,
    searchPath: ["knex", "public"]
});

export default db;
