import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import request from 'utils/request';

const httpLink = createHttpLink({
  uri: `${request.apiUrl}`,
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    Authorization: request.token,
  },
}));

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default apolloClient;
