import { books } from "../data";

export const BookResolver = {
  Query: {
    getBooks: () => {
      return books;
    },
  },
};
