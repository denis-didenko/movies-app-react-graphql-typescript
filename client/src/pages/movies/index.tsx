import { FC, useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_DISCOVER_MOVIES } from '../../graphql/queries';
import { IDiscoverData } from './types';
import Genres from './components/Genres';
import Sort from './components/Sort';
import MoviesList from './components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import './movies.css';

const MoviesPage: FC = () => {
    const [genreId, setGenreId] = useState<string[]>(['28']);
    const [sortBy, setSortBy] = useState('popularity');
    const [sortAscending, setSortAscending] = useState(false);

    const [getMovies, { loading, error, data }] = useLazyQuery<IDiscoverData>(GET_DISCOVER_MOVIES);

    useEffect(() => {
        const sortType = `${sortBy}${sortAscending ? '.asc' : '.desc'}`;
        console.log('genreId: ', genreId);
        console.log('sortType: ', sortType);
        getMovies({
            variables: {
                genreId: genreId.join(','),
                sortBy: sortType,
            },
        });
    }, [genreId, sortBy, sortAscending]); // eslint-disable-line react-hooks/exhaustive-deps

    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    console.log('error: ', error);
    console.log('data: ', data);

    return (
        <>
            <Genres genreId={genreId} setGenreId={setGenreId} />
            <Sort sortBy={sortBy} setSortBy={setSortBy} sortAscending={sortAscending} setSortAscending={setSortAscending} />
            <MoviesList movies={data?.discoverMovies} />
        </>
    );
};

export default MoviesPage;
