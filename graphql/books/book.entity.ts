import { ObjectType, Field } from "type-graphql";
import { Book } from "@prisma/client";

@ObjectType()
export class BookEntity implements Book {
  @Field(() => Number)
  id!: number;

  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;
}
