import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("movie").del()
        .then(() => {
            // Inserts seed entries
            return knex("movie").insert([
                { movie_id: 1, title: "Focus", year: 2015, rating: 7.3, scoutbase_rating: 6.2 },
                { movie_id: 2, title: "The Pursuit of Happyness", year: 2006, rating: 8.0, scoutbase_rating: 7.8 },
            ]);
        });
}
