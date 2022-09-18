import { useQuery } from '@apollo/client';
import { useState } from 'react';

import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/Pagination';
import { useFilterState } from '../../filter-form/useFilter';
import SeriesList from '../../series';
import { GET_DISCOVER_SERIES } from '../queries';
import { IDiscoverTvData, IDiscoverTvVariables } from '../types';

const SeriesDiscover = () => {
  const [page, setPage] = useState(1);
  const { genreId, year, language, network, sortBy } = useFilterState();

  const { loading, error, data } = useQuery<IDiscoverTvData, IDiscoverTvVariables>(
    GET_DISCOVER_SERIES,
    {
      variables: {
        input: {
          genreId,
          year,
          language,
          sortBy,
          network,
          page,
        },
      },
    },
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <SeriesList series={data?.discoverSeries.results} />
      <Pagination
        activePage={page}
        setActivePage={setPage}
        total={data?.discoverSeries.total_pages}
      />
    </>
  );
};

export default SeriesDiscover;
