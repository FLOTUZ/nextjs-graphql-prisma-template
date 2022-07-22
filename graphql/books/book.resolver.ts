import { books } from "../data";
import { Resolver, Query } from "type-graphql";
import { Book } from "./book.entity";

@Resolver(() => Book)
export class BookResolver {
  @Query(() => [Book])
  async getBooks(): Promise<Book[]> {
    return books;
  }
}
