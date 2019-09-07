const { ApolloServer, gql } = require('apollo-server-express');

// GraphQL schema
const typeDefs = gql`
    type Query {
        hello: String
    }
`;


const resolvers = {
    Query: {
        hello: () => 'Hello Scoutbase!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
