import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("director").del()
        .then(() => {
            // Inserts seed entries
            return knex("director").insert([
                {director_id: 1, person_ref: 1, movie_ref: 1},
                {director_id: 2, person_ref: 3, movie_ref: 1},
                {director_id: 3, person_ref: 5, movie_ref: 2},
            ]);
        });
}
