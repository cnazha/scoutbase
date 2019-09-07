import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Director {
    name: String!
    country: String!
    birthday: String!
  }
  type Actor {
    name: String!
    country: String!
    birthday: String!
  }
  type Movie {
    title: String!
    year: Int!
    rating: Float
    directors: [Director]!
    actors: [Actor]
  }

  type Query {
    movies: [Movie]!
  }
`;

export default typeDefs;
