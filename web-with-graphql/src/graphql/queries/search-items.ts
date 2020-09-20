import { gql } from '@apollo/client';

const searchQuery = gql`
  query SearchItems($q: String!, $siteId: String!) {
    searchItems(q: $q, siteId: $siteId) {
      categories {
        id
        name
        path_from_root {
          id
          name
        }
      }
      items {
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
      }
    }
  }
`;

export { searchQuery };
