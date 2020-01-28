import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});
