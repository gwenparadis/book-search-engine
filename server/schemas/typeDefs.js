const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    id: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    id: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(input: LoginInput!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(id: String!): User
  }
`;

module.exports = typeDefs;
