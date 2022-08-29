import { FC, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { SEARCH_MOVIES } from './queries';
import { ISearchMoviesData } from './types';
import SearchForm from './components/SearchForm';
import MoviesList from '../movies/components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import { useApi } from '../../hooks/useApi';
import './search.css';

const SearchPage: FC = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [debouncedQuery] = useDebounce(query, 1000);

    const [search, { data, loading, error }] = useLazyQuery<ISearchMoviesData>(SEARCH_MOVIES);
    const { sortMoviesByPopularity } = useApi();

    useEffect(() => {
        if (query.length) {
            search({
                variables: { query, page },
            });
        }
    }, [debouncedQuery, page]); // eslint-disable-line react-hooks/exhaustive-deps

    if (error) return <ErrorMessage error={error} />;
    if (loading) return <Loading />;

    return (
        <div className='search-page'>
            <h2>Пошук Фiльмiв</h2>
            <SearchForm query={query} setQuery={setQuery} />

            {data ? (
                <>
                    <MoviesList movies={sortMoviesByPopularity(data.searchMovies.results)} />
                    <Pagination activePage={page} setActivePage={setPage} total={data.searchMovies.total_pages} />
                </>
            ) : (
                <p>Немає результатів</p>
            )}
        </div>
    );
};

export default SearchPage;
