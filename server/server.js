const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const path = require("path");
const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./schemas/resolvers");

const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
// app.use(routes);

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () =>
      console.log(
        `🌍 Now listening on http://localhost:${PORT}${server.graphqlPath}`
      )
    );
  });
};

startApolloServer();
