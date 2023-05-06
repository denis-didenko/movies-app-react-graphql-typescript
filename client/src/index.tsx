import { createRoot } from 'react-dom/client';

import { ApolloProvider } from '@apollo/client';

import App from './app';
import { FilterContextProvider } from './app/context/filter';
import client from './app/store/apolloClient';

const appEl = document.getElementById('app') as HTMLDivElement;
const root = createRoot(appEl);

root.render(
  <ApolloProvider client={client}>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </ApolloProvider>,
);
