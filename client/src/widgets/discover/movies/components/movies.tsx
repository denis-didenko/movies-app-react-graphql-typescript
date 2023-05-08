import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { MovieList } from '@entities/movies';
import Pagination from '@features/pagination';
import ErrorMessage from '@shared/components/ErrorMessage';
import Loading from '@shared/components/Loading';
import { useFilter } from '@shared/hooks/useFilter';

import { GET_DISCOVER_MOVIES } from '../api/queries';
import { IDiscoverData, IDiscoverVariables } from '../model/types';

export const MoviesDiscover = () => {
  const [page, setPage] = useState(1);
  const { genreId, year, language, company, provider, sortBy } = useFilter();

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

  const movies = data?.discoverMovies.results || [];

  return (
    <>
      <MovieList movies={movies} />
      <Pagination
        activePage={page}
        setActivePage={setPage}
        total={data?.discoverMovies.total_pages}
      />
    </>
  );
};
