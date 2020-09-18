export interface CategoryResponse {
  id: string;
  name: string;
  picture: string;
  permalink: string;
  total_items_in_this_category: number;
  path_from_root: PathFromRoot[];
  children_categories: [];
  attribute_types: string;
  settings: Settings;
  meta_categ_id: string;
  attributable: boolean;
  date_created: Date;
}

interface PathFromRoot {
  id: string;
  name: string;
}

interface Settings {
  adult_content: boolean;
  buying_allowed: boolean;
  buying_modes: string[];
  catalog_domain: string;
  coverage_areas: string;
  currencies: string[];
  fragile: boolean;
  immediate_payment: string;
  item_conditions: string[];
  items_reviews_allowed: boolean;
  listing_allowed: boolean;
  max_description_length: number;
  max_pictures_per_item: number;
  max_pictures_per_item_var: number;
  max_sub_title_length: number;
  max_title_length: number;
  maximum_price: string;
  minimum_price: number;
  mirror_category: string;
  mirror_master_category: string;
  mirror_slave_categories: [];
  price: string;
  reservation_allowed: string;
  restrictions: [];
  rounded_address: boolean;
  seller_contact: string;
  shipping_modes: string[];
  shipping_options: string[];
  shipping_profile: string;
  show_contact_information: boolean;
  simple_shipping: string;
  stock: string;
  sub_vertical: string;
  subscribable: boolean;
  tags: [];
  vertical: string;
  vip_subdomain: string;
  buyer_protection_programs: [];
  status: string;
}
