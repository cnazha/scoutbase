import resolvers from "./resolvers";
import typeDefs from "./schema";
import schemaDirectives from "./directives";
import context from "./context";

const { ApolloServer} = require("apollo-server-express");

const server = new ApolloServer({ typeDefs, resolvers, context, schemaDirectives });

export default server;
