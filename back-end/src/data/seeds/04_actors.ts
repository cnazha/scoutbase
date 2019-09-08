import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("actor").del()
        .then(() => {
            // Inserts seed entries
            return knex("actor").insert([
                {actor_id: 1, person_ref: 2, movie_ref: 1},
                {actor_id: 2, person_ref: 4, movie_ref: 1},
                {actor_id: 3, person_ref: 2, movie_ref: 2},
                {actor_id: 4, person_ref: 7, movie_ref: 2},
            ]);
        });
}

// 1 US
// 2 Australia
// 3
