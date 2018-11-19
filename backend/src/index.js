require("dotenv").config({ path: "../../.env" });
const { Prisma } = require("prisma-binding");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");

const db = new Prisma({
    typeDefs: "../database/generated/prisma.graphql",
    endpoint: process.env.DATA_ENDPOINT,
    secret: process.env.SECRET
});

const server = new GraphQLServer({
    typeDefs: "./schema-data.graphql",
    resolvers,
    context: req => ({ ...req, db })
});

SERVER_PORT=process.env.PORT

server.start(({SERVER_PORT}) =>
    console.log(`Server is running on ${SERVER_PORT}`)
);
