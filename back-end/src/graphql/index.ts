import resolvers from "./resolvers";
import typeDefs from "./schema";

const { ApolloServer} = require("apollo-server-express");

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
