import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'https://movies-app-react-graphql-typescript.vercel.app/graphql',
  cache: new InMemoryCache(),
  headers: {
    'Access-Control-Allow-Origin': '*', // this is required for CORS
  },
});
