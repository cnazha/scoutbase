import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  // Check if actor table exists - createTableIfNotExists is not recommended by Knex
  const tableExists = await knex.schema.hasTable("actor");

  // Build actor schema query
  const query = knex.schema.createTable("actor", table => {
    table.increments('actor_id').primary();
    table.integer("person_ref").references('person.person_id');
    table.integer("movie_ref").references('movie.movie_id');
  });

  // Create table if it doesn't exist
  if (!tableExists) return query;
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("actor");
}
