import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { FilterContextProvider } from './context/filter-context';
import { client } from './graphql/client';

const appEl = document.getElementById('app') as HTMLDivElement;
const root = ReactDOM.createRoot(appEl);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </BrowserRouter>
  </ApolloProvider>,
);
