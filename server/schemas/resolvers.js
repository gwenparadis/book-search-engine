const { UserInputError } = require("apollo-server-express");
const { User, bookSchema } = require("../models");

const resolvers = {
  Query: {
    me: async () => {
      return await User.find({});
    },
  },
  Mutation: {
    login: async (args) => {
      const login = await User.findOne(args);
      return login;
    },
    addUser: async (args) => {
      const newUser = await User.create(args);
      return newUser;
    },
    saveBook: async (args) => {
      const newBook = await Book.create(args);
      return newBook;
    },
    removeBook: async (args) => {
      const deleteBook = await Book.findOneAndDelete(args);
      return deleteBook;
    },
  },
};

module.exports = resolvers;
