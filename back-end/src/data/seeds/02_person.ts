import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("person").del()
        .then(() => {
            // Inserts seed entries
            return knex("person").insert([
                {person_id: 1, name: 'Glenn Ficarra', country_ref: 1, birthday: "1971-05-27"},
                {person_id: 2, name: 'Will Smith', country_ref: 1, birthday: "1968-09-25"},
                {person_id: 3, name: 'John Requa', country_ref: 1, birthday: "1967-01-01"},
                {person_id: 4, name: 'Margot Robbie', country_ref: 2, birthday: "1968-07-02"},
                {person_id: 5, name: 'Gabriele Muccino', country_ref: 3, birthday: "1967-05-20"},
                {person_id: 6, name: 'Thandie Newton', country_ref: 4, birthday: "1972-11-06"},
                {person_id: 7, name: 'Jaden Smith', country_ref: 1, birthday: "1998-07-08"},
            ]);
        });
}
