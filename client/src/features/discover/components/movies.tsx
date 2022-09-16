import { useState } from 'react';
import { useQuery } from '@apollo/client';
import MoviesList from '../../movies';
import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/Pagination';
import { GET_DISCOVER_MOVIES } from '../queries';
import { IDiscoverData, IDiscoverVariables } from '../types';
import { useFilter } from '../../filter-form/useFilter';

const MoviesDiscover = () => {
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
