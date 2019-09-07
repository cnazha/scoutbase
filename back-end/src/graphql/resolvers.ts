import { IResolvers } from "apollo-server-express";
import Movies from "../data/movies.sample.json";
import {generateAuthUser} from "../utils/auth.helper";

const resolvers: IResolvers = {
  Query: {
    movies: async (parent, args, context) => Movies
  },
  Mutation: {
    createUser: async (root, { username, password }) => generateAuthUser({username}),
    login: async (root, { username, password }) => generateAuthUser({username})
  }
};

export default resolvers;
