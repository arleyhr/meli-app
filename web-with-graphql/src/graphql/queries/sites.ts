import { gql } from '@apollo/client';

const sitesQuery = gql`
  query GetSites {
    sites {
      id
      name
    }
  }
`;

export { sitesQuery };
