import { Args } from "graphql/models";
import { prisma } from "@services";
import { Book } from "@prisma/client";

export const BookResolver = {
  Query: {
    allBooks: (_: any, { pagination }: Args) => {
      return prisma.book.findMany({
        ...pagination,
      });
    },
    bookById: (_: any, { id }: Book) => {
      return prisma.book.findUnique({
        where: {
          id,
        },
      });
    },
  },

  Mutation: {
    createBook: async (_: any, { ...data }: Book) => {
      const book = await prisma.book.create({
        data,
      });
      return book;
    },

    updateBook: async (_: any, { id, ...data }: Book) => {
      const book = await prisma.book.update({
        where: { id },
        data,
      });

      return book;
    },

    deleteBook: async (_: any, { id }: Book) => {
      const book = await prisma.book.delete({
        where: { id },
      });

      return book;
    },
  },
};
