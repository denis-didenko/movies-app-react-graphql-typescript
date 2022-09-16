import { useState } from 'react';
import { useQuery } from '@apollo/client';
import SeriesList from '../../series';
import ErrorMessage from '../../../components/ErrorMessage';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/Pagination';
import { GET_DISCOVER_SERIES } from '../queries';
import { IDiscoverTvData, IDiscoverTvVariables } from '../types';
import { useFilter } from '../../filter-form/useFilter';

const SeriesDiscover = () => {
  const [page, setPage] = useState(1);
  const { genreId, year, language, network, sortBy } = useFilter();

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
