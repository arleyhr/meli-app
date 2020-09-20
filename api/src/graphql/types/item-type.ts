import { Field, Int, ObjectType } from 'type-graphql';

import { Category } from './category-type';

@ObjectType({ description: 'Object representing a items response' })
export class ItemsResponse {
  @Field(() => Author)
  author!: Author;

  @Field(() => [Category])
  categories!: Category[];

  @Field(() => [Item])
  items!: Item[];
}

@ObjectType({ description: 'Object representing a item detail response' })
export class ItemDetailResponse {
  @Field(() => Author)
  author!: Author;

  @Field(() => Category)
  category!: Category;

  @Field(() => ItemDetail)
  item!: ItemDetail;
}

@ObjectType({ description: 'Object representing a author' })
export class Author {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  lastname!: string;
}

@ObjectType({ description: 'Object representing a price' })
export class Price {
  @Field(() => String)
  currency!: string;

  @Field(() => Number)
  amount!: number;

  @Field(() => Number)
  decimals!: number;
}

@ObjectType({ description: 'Object representing a item' })
export class Item {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => Price)
  price!: Price;

  @Field(() => String)
  picture!: string;

  @Field(() => String)
  condition!: string;

  @Field(() => Boolean)
  free_shipping!: boolean;
}

@ObjectType({ description: 'Object representing a item detail' })
export class ItemDetail extends Item {
  @Field(() => Int)
  sold_quantity!: number;

  @Field(() => String)
  description!: string;
}
