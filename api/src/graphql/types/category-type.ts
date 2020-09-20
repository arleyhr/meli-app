import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Object representing a category' })
export class Category {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  picture!: string;

  @Field(() => String)
  permalink!: string;

  @Field(() => Number)
  total_items_in_this_category!: number;

  @Field(() => [PathFromRoot])
  path_from_root!: PathFromRoot[];

  @Field(() => String)
  children_categories!: [];

  @Field(() => String)
  attribute_types!: string;

  @Field(() => String)
  meta_categ_id!: string;

  @Field(() => Boolean)
  attributable!: boolean;

  @Field(() => String)
  date_created!: Date;
}

@ObjectType({ description: 'Object representing a path to root' })
export class PathFromRoot {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  name!: string;
}
