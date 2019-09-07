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
  
  type User {
    id: ID!
    name: String!
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    movies: [Movie]!
  }

  type Mutation {
    createUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
  
`;

export default typeDefs;
