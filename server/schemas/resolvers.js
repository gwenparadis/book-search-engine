const { bookSchema } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return await bookSchema.find({});
    },
  },
};

module.exports = resolvers;
