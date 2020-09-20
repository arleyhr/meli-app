import { ApolloClient, InMemoryCache } from '@apollo/client';
import { apiUrl } from '.';

const apolloClient = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

export { apolloClient };
