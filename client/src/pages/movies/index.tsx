import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DISCOVER_MOVIES } from './queries';
import { IMoviesData } from './types';
import Genres from './components/Genres';
import Sort from './components/Sort';
import MoviesList from './components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import './movies.css';

interface IDiscoverData {
    discoverMovies: IMoviesData;
}

const MoviesPage: FC = () => {
    const [genreId, setGenreId] = useState<string[]>(['28']);
    const [sortBy, setSortBy] = useState('popularity');
    const [sortAscending, setSortAscending] = useState(false);
    const [page, setPage] = useState(1);

    const sortType = `${sortBy}${sortAscending ? '.asc' : '.desc'}`;

    const { loading, error, data } = useQuery<IDiscoverData>(GET_DISCOVER_MOVIES, {
        variables: {
            genreId: genreId.join(','),
            sortBy: sortType,
            page,
        },
    });

    if (error) return <ErrorMessage error={error} />;
    if (!data) return null;

    const { results, total_pages } = data.discoverMovies;

    return (
        <>
            <Genres genreId={genreId} setGenreId={setGenreId} />
            <Sort sortBy={sortBy} setSortBy={setSortBy} sortAscending={sortAscending} setSortAscending={setSortAscending} />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <MoviesList movies={results} />
                    <Pagination activePage={page} setActivePage={setPage} total={total_pages} />
                </>
            )}
        </>
    );
};

export default MoviesPage;
