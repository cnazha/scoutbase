import db from "../config/db";
import IMovie from "./interfaces/movie.interface";
import IPerson from "./interfaces/person.interface";

export const getMovies = (): Promise<IMovie[]> =>
  db
    .from("movie")
    .select("movie_id", "title", "rating", "year", "scoutbase_rating");

export const getMovieDirectors = async (
  movie_id: number
): Promise<IPerson[]> => {
  const directors = await db("director")
    .join("person", "director.person_ref", "person.person_id")
    .join("country", "person.country_ref", "country.country_id")
    .select("person.name as name", "country.name as country", "birthday")
    .where("movie_ref", movie_id);

  return directors.map(director => ({
    ...director,
    birthday: director.birthday.toLocaleDateString()
  }));
};

export const getMovieActors = async (movie_id: number): Promise<IPerson[]> => {
  const actors = await db("actor")
    .join("person", "actor.person_ref", "person.person_id")
    .join("country", "person.country_ref", "country.country_id")
    .select("person.name as name", "country.name as country", "birthday")
    .where("movie_ref", movie_id);

  return actors.map(actor => ({
    ...actor,
    birthday: actor.birthday.toLocaleDateString()
  }));
};
