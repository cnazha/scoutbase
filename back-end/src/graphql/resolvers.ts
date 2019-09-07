import {IResolvers} from 'apollo-server-express'
import Movies from "../data/movies.sample.json"

const resolvers: IResolvers = {
    Query: {
        movies: async (parent, args, context) => Movies
    },
};

export default resolvers;
