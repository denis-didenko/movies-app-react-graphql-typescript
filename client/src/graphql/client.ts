import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'https://movies-app-react-graphql-typescript-m2ztdxfmd-denis-didenko.vercel.app/graphql',

  cache: new InMemoryCache(),
});
