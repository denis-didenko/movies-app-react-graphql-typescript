import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://localhost:5000/graphql',
    uri: 'https://movies-app-react-graphql.herokuapp.com/graphql',

    credentials: 'omit',
    // fetchOptions: {
    //   mode: 'no-cors',
    // },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }),
  cache: new InMemoryCache(),
});
