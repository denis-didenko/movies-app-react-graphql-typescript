import { useState } from 'react';

import { useQuery } from '@apollo/client';
import { SeriesList } from '@entities/series';
import Pagination from '@features/pagination';
import ErrorMessage from '@shared/components/ErrorMessage';
import Loading from '@shared/components/Loading';
import { useFilterState } from '@shared/hooks/useFilter';

import { GET_DISCOVER_SERIES } from '../api/queries';
import { IDiscoverTvData, IDiscoverTvVariables } from '../model/types';

export const SeriesDiscover = () => {
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

  const series = data?.discoverSeries.results || [];

  return (
    <>
      <SeriesList series={series} />
      <Pagination
        activePage={page}
        setActivePage={setPage}
        total={data?.discoverSeries.total_pages}
      />
    </>
  );
};
