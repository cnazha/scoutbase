import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  // Check if country table exists - createTableIfNotExists is not recommended by Knex
  const tableExists = await knex.schema.hasTable("country");

  // Build country schema query
  const query = knex.schema.createTable("country", table => {
    table.increments('country_id').primary();
    table.string("name");
  });

  // Create table if it doesn't exist
  if (!tableExists) return query;
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("country");
}
