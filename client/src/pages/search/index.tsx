import { useState, useEffect, useRef } from 'react';
import { ApolloError, useLazyQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { SEARCH_MOVIES, SEARCH_SERIES, SEARCH_PERSON } from './queries';
import { ISearchMoviesData, ISearchSeriesData, ISearchPersonsData, ISearchQuery } from './types';
import SearchForm from './components/SearchForm';
import MoviesList from '../movies/components/MoviesList';
import SeriesList from '../series/components/SeriesList';
import PersonList from '../person/components/PersonList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import './search.css';

interface ISearchVariables {
  query: string;
  page: number;
}

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({ name: '', query: '' });
  const dataRef = useRef<ISearchMoviesData | ISearchSeriesData | ISearchPersonsData>();
  const errorRef = useRef<ApolloError>();
  const loadingRef = useRef<boolean>();
  const [page, setPage] = useState(1);

  const [searchMovies, { data: moviesData, loading: moviesLoading, error: moviesError }] =
    useLazyQuery<ISearchMoviesData, ISearchVariables>(SEARCH_MOVIES);
  const [searchSeries, { data: seriesData, loading: seriesLoading, error: seriesError }] =
    useLazyQuery<ISearchSeriesData, ISearchVariables>(SEARCH_SERIES);
  const [searchPersons, { data: personsData, loading: personsLoading, error: personsError }] =
    useLazyQuery<ISearchPersonsData, ISearchVariables>(SEARCH_PERSON);

  const fetchQuery = searchQuery.query;
  const fetchName = searchQuery.name;
  const fetchVariables = { variables: { query: fetchQuery, page } };
  const [debouncedQuery] = useDebounce(fetchQuery, 1000);

  useEffect(() => {
    if (fetchQuery.length) {
      switch (fetchName) {
        case 'movies':
          searchMovies(fetchVariables);
          dataRef.current = moviesData;
          errorRef.current = moviesError;
          loadingRef.current = moviesLoading;
          break;
        case 'series':
          searchSeries(fetchVariables);
          dataRef.current = seriesData;
          errorRef.current = seriesError;
          loadingRef.current = seriesLoading;
          break;
        case 'persons':
          searchPersons(fetchVariables);
          dataRef.current = personsData;
          errorRef.current = personsError;
          loadingRef.current = personsLoading;
          break;
        default:
          break;
      }
    }
  }, [debouncedQuery, fetchName, page, moviesData, seriesData, personsData]); // eslint-disable-line

  if (errorRef.current) return <ErrorMessage error={errorRef.current} />;
  if (loadingRef.current) return <Loading />;

  return (
    <div className='search-page'>
      <SearchForm setSearchQuery={setSearchQuery} />

      {dataRef.current ? (
        'searchMovies' in dataRef.current ? (
          <>
            <MoviesList movies={dataRef.current.searchMovies.results} />
            <Pagination
              activePage={page}
              setActivePage={setPage}
              total={dataRef.current.searchMovies.total_pages}
            />
          </>
        ) : 'searchSeries' in dataRef.current ? (
          <>
            <SeriesList series={dataRef.current.searchSeries.results} />
            <Pagination
              activePage={page}
              setActivePage={setPage}
              total={dataRef.current.searchSeries.total_pages}
            />
          </>
        ) : 'searchPerson' in dataRef.current ? (
          <PersonList persons={dataRef.current.searchPerson.results} />
        ) : null
      ) : (
        <p>Немає результатів</p>
      )}
    </div>
  );
};

export default SearchPage;
