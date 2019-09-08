import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    // Check if movie table exists - createTableIfNotExists is not recommended by Knex
    const tableExists = await knex.schema.hasTable("movie");

    // Build user schema query
    const query = knex.schema.createTable("movie", table => {
        table.increments('movie_id').primary();
        table.string("title");
        table.integer("year");
        table.float("rating");
        table.float("scoutbase_rating");
    });

    // Create table if it doesn't exist
    if (!tableExists) return query;
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("movie");
}
