import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    // Check if person table exists - createTableIfNotExists is not recommended by Knex
    const tableExists = await knex.schema.hasTable("person");

    // Build actor schema query
    const query = knex.schema.createTable("person", table => {
        table.increments('person_id').primary();
        table.string("name");
        table.integer("country_ref").references('country.country_id');
        table.date("birthday");
    });

    // Create table if it doesn't exist
    if (!tableExists) return query;
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("person");
}
