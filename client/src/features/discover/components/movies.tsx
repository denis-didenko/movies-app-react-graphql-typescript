import { useQuery } from '@apollo/client';
import { useState } from 'react';

import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/Pagination';
import { useFilterState } from '../../filter-form/useFilter';
import MoviesList from '../../movies';
import { GET_DISCOVER_MOVIES } from '../queries';
import { IDiscoverData, IDiscoverVariables } from '../types';

const MoviesDiscover = () => {
  const [page, setPage] = useState(1);
  const { genreId, year, language, company, provider, sortBy } = useFilterState();

  const { loading, error, data } = useQuery<IDiscoverData, IDiscoverVariables>(
    GET_DISCOVER_MOVIES,
    {
      variables: {
        input: {
          genreId,
          year,
          language,
          sortBy,
          company,
          provider,
          page,
        },
      },
    },
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <MoviesList movies={data?.discoverMovies.results} />
      <Pagination
        activePage={page}
        setActivePage={setPage}
        total={data?.discoverMovies.total_pages}
      />
    </>
  );
};

export default MoviesDiscover;
