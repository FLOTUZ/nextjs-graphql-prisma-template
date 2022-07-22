import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Book {
  @Field(() => ID)
  id!: number;

  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}
