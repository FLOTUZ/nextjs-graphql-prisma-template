import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { BookResolver } from "./resolvers/book.resolver";
import { graphqlmodel } from "./schemas/schema";

export const apolloServer = new ApolloServer({
  typeDefs: graphqlmodel,
  resolvers: [BookResolver],
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const startServer = apolloServer.start();
