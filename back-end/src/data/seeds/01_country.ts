import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("country").del()
        .then(() => {
            // Inserts seed entries
            return knex("country").insert([
                { country_id: 1, name: "United States" },
                { country_id: 2, name: "Australia" },
                { country_id: 3, name: "Italy" },
                { country_id: 4, name: "United Kingdom" },
            ]);
        });
};
