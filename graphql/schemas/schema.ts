import { gql } from "apollo-server-core";

export const graphqlmodel = gql`
  type Book {
    id: ID!
    name: String
  }
  type Query {
    getBooks: [Book]
  }
`;
