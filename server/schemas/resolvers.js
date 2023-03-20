const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const { User, Book } = require("../models");
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
    saveBook: async (parent, { input }, context) => {
      const { bookData } = input;
      if (context.user) {
        const userData = await await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          { $addToSet: { savedBooks: bookData } },
          { new: true }
        ).select("-__v -password");

        return userData;
      }

      throw new AuthenticationError("Not logged in!");
    },
    removeBook: async (parent, { book_id }, context) => {
      if (context.user) {
        const savedBooks = await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          { $pull: { savedBooks: savedBooks._id } },
          { new: true }
        ).select("-__v -password");

        return savedBooks;
      }
      throw new AuthenticationError("Not logged in!");
    },
  },
};

module.exports = resolvers;
