import { gql } from '@apollo/client';

const getItem = gql`
  query GetItemDetail($itemId: String!) {
    itemDetail(itemId: $itemId) {
      category {
        id
        name
        path_from_root {
          id
          name
        }
      }
      item {
        id
        title
        price {
          currency
          amount
          decimals
        }
        picture
        condition
        free_shipping
        sold_quantity
        description
      }
    }
  }
`;

export { getItem };
