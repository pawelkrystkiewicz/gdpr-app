require("dotenv").config({ path: "../../.env" });
const { Prisma } = require("prisma-binding");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");

const PORT = process.env.CLIENT_PORT;

const db = new Prisma({
  typeDefs: "../database/generated/prisma.graphql",
  endpoint: process.env.DATABASE_ENPOINT,
//   secret: process.env.SECRET
});

const server = new GraphQLServer({
    typeDefs: "./schema.graphql",
    resolvers,
    context: req => ({ ...req, db })
});


console.log(PORT)

server.start(({PORT}) =>
    console.log(`Server is running on ${PORT}`)
);
