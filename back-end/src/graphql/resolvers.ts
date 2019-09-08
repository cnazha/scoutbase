import { IResolvers } from "apollo-server-express";
import { generateAuthUser } from "../utils/auth.helper";
import { getMovieDirectors, getMovieActors, getMovies } from "../data/queries";
import IPerson from "../data/interfaces/person.interface";
import { IAuthUser } from "../data/interfaces/user.interface";
import IAuthInput from "../data/interfaces/authInput.interface";
import IMovie from "../data/interfaces/movie.interface";


const resolvers: IResolvers = {
  Query: {
    movies: async (parent, args, context): Promise<IMovie[]> =>
      await getMovies()
  },
  Movie: {
    directors: async ({ movie_id }: { movie_id: number }): Promise<IPerson[]> =>
      await getMovieDirectors(movie_id),
    actors: async ({ movie_id }: { movie_id: number }): Promise<IPerson[]> =>
      await getMovieActors(movie_id)
  },
  Mutation: {
    createUser: async (
      root,
      { username, password }: IAuthInput
    ): Promise<IAuthUser> => generateAuthUser({ username }),
    login: async (
      root,
      { username, password }: IAuthInput
    ): Promise<IAuthUser> => generateAuthUser({ username })
  }
};

export default resolvers;
