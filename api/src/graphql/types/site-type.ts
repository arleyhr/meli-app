import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Object representing a site' })
export class Site {
  @Field(() => String)
  default_currency_id!: string;

  @Field(() => String)
  id!: string;

  @Field(() => String)
  name!: string;
}
