import { CategoryResponse } from './categories';

export interface SearchItemsResponse {
  site_id: string;
  query: string;
  paging: Paging;
  results: Result[];
  secondary_results: [];
  related_results: [];
  sort: Sort;
  available_sorts: Sort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
}

export interface SearchItemsDto {
  author: {
    name: string;
    lastname: string;
  };
  categories: CategoryResponse[];
  items: Item[];
}
export interface ItemDetailDto {
  author: {
    name: string;
    lastname: string;
  };
  category: CategoryResponse;
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  };
}

export interface ItemDescriptionDto {
  text: string;
  plain_text: string;
}

interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface AvailableFilter {
  id: string;
  name: string;
  type: Type;
  values: AvailableFilterValue[];
}

enum Type {
  Boolean = 'boolean',
  Range = 'range',
  String = 'STRING',
  Text = 'text',
}

interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

interface Sort {
  id: null | string;
  name: string;
}

interface Filter {
  id: string;
  name: string;
  type: Type;
  values: FilterValue[];
}

interface FilterValue {
  id: string;
  name: string;
  path_from_root: Sort[];
}

interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface Result {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: Condition;
  permalink: string;
  thumbnail: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price: number | null;
  category_id: string;
  official_store_id: number | null;
  domain_id: string;
  catalog_product_id: null | string;
  tags: string[];
  catalog_listing?: boolean;
  differential_pricing?: DifferentialPricing;
  pictures?: Picture[];
}

interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}
interface Address {
  state_id: string;
  state_name: string;
  city_id: null | string;
  city_name: string;
}

interface Attribute {
  value_id: null | string;
  value_name: null | string;
  attribute_group_id: string;
  attribute_group_name: string;
  source: number;
  name: string;
  value_struct: Struct | null;
  values: AttributeValue[];
  id: ID;
}

enum ID {
  AlphanumericModel = 'ALPHANUMERIC_MODEL',
  Brand = 'BRAND',
  ItemCondition = 'ITEM_CONDITION',
  Line = 'LINE',
  Model = 'MODEL',
  PackageLength = 'PACKAGE_LENGTH',
  PackageWeight = 'PACKAGE_WEIGHT',
  ProcessorModel = 'PROCESSOR_MODEL',
  Submodel = 'SUBMODEL',
  Weight = 'WEIGHT',
}

interface Struct {
  number: number;
  unit: string;
}

interface AttributeValue {
  struct: Struct | null;
  source: number;
  id: null | string;
  name: null | string;
}

enum Condition {
  New = 'new',
  Used = 'used',
}

interface DifferentialPricing {
  id: number;
}

interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

interface Seller {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  eshop?: Eshop;
  seller_reputation: SellerReputation;
}

interface Eshop {
  nick_name: string;
  eshop_rubro: null;
  eshop_id: number;
  eshop_locations: [];
  site_id: string;
  eshop_logo_url: string;
  eshop_status_id: number;
  seller: number;
  eshop_experience: number;
}

interface SellerReputation {
  transactions: Transactions;
  power_seller_status: string | null;
  metrics: Metrics;
  level_id: string;
  protection_end_date?: Date;
  real_level?: string;
}

interface Metrics {
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  sales: Sales;
  cancellations: Cancellations;
}

interface Cancellations {
  rate: number;
  value: number;
  period: string;
  excluded?: Excluded;
}

interface Excluded {
  real_rate: number;
  real_value: number;
}

interface Sales {
  period: string;
  completed: number;
}

interface Transactions {
  total: number;
  canceled: number;
  period: string;
  ratings: Ratings;
  completed: number;
}

interface Ratings {
  negative: number;
  positive: number;
  neutral: number;
}

interface SellerAddress {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: Sort;
  state: Sort;
  city: Sort;
  latitude: string;
  longitude: string;
}

interface Shipping {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
}
