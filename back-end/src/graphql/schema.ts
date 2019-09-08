import { gql } from "apollo-server-express";

const typeDefs = gql`
  
  directive @isAuth on FIELD_DEFINITION
  
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
    scoutbase_rating: Float @isAuth
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
    actors: [Actor!]!
    directors: [Director!]!
  }

  type Mutation {
    createUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
  }
  
`;

export default typeDefs;
