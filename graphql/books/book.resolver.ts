import { PrismaClient } from "@prisma/client";
import { Book } from "graphql/validators/models";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { BookEntity } from "./book.entity";

@Resolver(() => BookEntity)
export class BookResolver {
  constructor(private readonly prisma: PrismaClient) {
    this.prisma = new PrismaClient();
  }
  @Query(() => [BookEntity])
  async allBooks() {
    return await this.prisma.book.findMany();
  }

  @Query(() => BookEntity, { nullable: true })
  async oneBook(@Arg("id") id: number): Promise<BookEntity | null> {
    return await this.prisma.book.findUnique({
      where: {
        id,
      },
    });
  }

  @Mutation(() => BookEntity)
  async createBook(@Arg("name") name: string): Promise<BookEntity> {
    return await this.prisma.book.create({
      data: {
        name,
      },
    });
  }

  @Mutation(() => BookEntity)
  async updateBook(
    @Arg("id") id: number,
    @Arg("name") name: string
  ): Promise<BookEntity> {
    return await this.prisma.book.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  @Mutation(() => Boolean)
  async deleteBook(@Arg("id") id: number): Promise<boolean> {
    try {
      await this.prisma.book.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
