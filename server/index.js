require("dotenv").config();
const db = require("./knex");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../schema/schema");
const resolvers = require("../resolvers");

const app = require("./app.js");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest();
    console.log("Seeding data");
    await db.seed.run();

    const server = new ApolloServer({ typeDefs, resolvers });
    console.log("Starting express");
    await server.start();
    server.applyMiddleware({ app, path: "/" });
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
