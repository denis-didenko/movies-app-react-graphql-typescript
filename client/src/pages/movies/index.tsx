import { FC, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DISCOVER_MOVIES } from '../../graphql/queries';
import { IDiscoverData } from './types';
import Genres from './components/Genres';
import Sort from './components/Sort';
import MoviesList from './components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import './movies.css';

const MoviesPage: FC = () => {
    const [genreId, setGenreId] = useState<string[]>(['28']);
    const [sortBy, setSortBy] = useState('popularity');
    const [sortAscending, setSortAscending] = useState(false);
    const [page, setPage] = useState(1);

    const [getMovies, { loading, error, data }] = useLazyQuery<IDiscoverData>(GET_DISCOVER_MOVIES);

    useEffect(() => {
        const sortType = `${sortBy}${sortAscending ? '.asc' : '.desc'}`;

        getMovies({
            variables: {
                genreId: genreId.join(','),
                sortBy: sortType,
                page,
            },
        });
    }, [genreId, sortBy, sortAscending, page]); // eslint-disable-line react-hooks/exhaustive-deps

    if (error) return <ErrorMessage error={error} />;

    return (
        <>
            <Genres genreId={genreId} setGenreId={setGenreId} />
            <Sort sortBy={sortBy} setSortBy={setSortBy} sortAscending={sortAscending} setSortAscending={setSortAscending} />
            {loading ? <Loading /> : <MoviesList movies={data?.discoverMovies} />}
            <Pagination activePage={page} setActivePage={setPage} />
        </>
    );
};

export default MoviesPage;
