const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await await User.findOne({
          _id: context.user._id,
        }).select("-__v -password");

        return userData;
      }

      throw new AuthenticationError("Not logged in!");
    },
  },

  Mutation: {
    login: async (parent, { input }) => {
      const { email, password } = input;
      const login = await User.findOne({ email });
      if (!login) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const correctPw = await login.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Credentials");
      }

      const token = signToken(login);
      return { token, login };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { bookData }, context) => {
      const newBook = await bookSchema.create(args);
      return newBook;
    },
    removeBook: async (parent, { bookId }, context) => {
      const deleteBook = await bookSchema.findOneAndDelete(args);
      return deleteBook;
    },
  },
};

module.exports = resolvers;
