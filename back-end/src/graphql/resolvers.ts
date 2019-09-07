import { IResolvers } from "apollo-server-express";
import Movies from "../data/movies.sample.json";
import {authSample} from "../utils/auth.helper";

const resolvers: IResolvers = {
  Query: {
    movies: async (parent, args, context) => Movies
  },
  Mutation: {
    createUser: async (root, { username, password }) => authSample,
    login: async (root, { username, password }) => authSample
  }
};

export default resolvers;
