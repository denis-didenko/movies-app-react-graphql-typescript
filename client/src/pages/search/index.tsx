import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SEARCH_MOVIES } from './queries';
import { ISearchMoviesData } from './types';
import SearchForm from './components/SearchForm';
import MoviesList from '../movies/components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';

const SearchPage: FC = () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const { data, loading, error } = useQuery<ISearchMoviesData>(GET_SEARCH_MOVIES, {
        variables: { query, page },
    });

    if (error) return <ErrorMessage error={error} />;
    if (loading) return <Loading />;

    console.log('data: ', data);

    return (
        <div className='search-page'>
            <h2>Search movies</h2>
            <SearchForm query={query} setQuery={setQuery} />
            <MoviesList movies={data?.searchMovies} />
        </div>
    );
};

export default SearchPage;
