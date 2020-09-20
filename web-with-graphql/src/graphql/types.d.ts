export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** Search item  */
  searchItems: ItemsResponse;
  /** Get item by id */
  itemDetail: ItemDetailResponse;
  /** Get all sites  */
  sites: Array<Site>;
};


export type QuerySearchItemsArgs = {
  siteId?: Maybe<Scalars['String']>;
  q: Scalars['String'];
};


export type QueryItemDetailArgs = {
  itemId: Scalars['String'];
};

/** Object representing a items response */
export type ItemsResponse = {
  __typename?: 'ItemsResponse';
  author: Author;
  categories: Array<Category>;
  items: Array<Item>;
};

/** Object representing a author */
export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
  lastname: Scalars['String'];
};

/** Object representing a category */
export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
  permalink: Scalars['String'];
  total_items_in_this_category: Scalars['Float'];
  path_from_root: Array<PathFromRoot>;
  children_categories: Scalars['String'];
  attribute_types: Scalars['String'];
  meta_categ_id: Scalars['String'];
  attributable: Scalars['Boolean'];
  date_created: Scalars['String'];
};

/** Object representing a path to root */
export type PathFromRoot = {
  __typename?: 'PathFromRoot';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Object representing a item */
export type Item = {
  __typename?: 'Item';
  id: Scalars['String'];
  title: Scalars['String'];
  price: Price;
  picture: Scalars['String'];
  condition: Scalars['String'];
  free_shipping: Scalars['Boolean'];
};

/** Object representing a price */
export type Price = {
  __typename?: 'Price';
  currency: Scalars['String'];
  amount: Scalars['Float'];
  decimals: Scalars['Float'];
};

/** Object representing a item detail response */
export type ItemDetailResponse = {
  __typename?: 'ItemDetailResponse';
  author: Author;
  category: Category;
  item: ItemDetail;
};

/** Object representing a item detail */
export type ItemDetail = {
  __typename?: 'ItemDetail';
  id: Scalars['String'];
  title: Scalars['String'];
  price: Price;
  picture: Scalars['String'];
  condition: Scalars['String'];
  free_shipping: Scalars['Boolean'];
  sold_quantity: Scalars['Int'];
  description: Scalars['String'];
};

/** Object representing a site */
export type Site = {
  __typename?: 'Site';
  default_currency_id: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};
