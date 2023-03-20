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
    _id: ID!
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
    _id: ID!
    authors: [String]
    description: String!
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
    removeBook(book_id: ID!): User
  }
`;

module.exports = typeDefs;
