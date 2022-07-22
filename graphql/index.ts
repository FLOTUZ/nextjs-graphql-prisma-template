import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { buildSchema } from "type-graphql";
import { BookResolver } from "./books/book.resolver";

const schema = await buildSchema({
  resolvers: [BookResolver],
});

export const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const startServer = apolloServer.start();
