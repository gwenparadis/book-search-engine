const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: _id
    username: String
    email: String
    password: String
    savedBooks: In
  }

  type Book {
    _id: id
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    users: [User]
    books: [Book]
  }
`;

module.exports = typeDefs;
