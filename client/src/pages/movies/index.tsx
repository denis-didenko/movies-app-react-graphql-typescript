import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DISCOVER_MOVIES, GET_GENRES } from './queries';
import { IGenre, IMoviesData } from './types';
import Filter from './components/filter';
import MoviesList from './components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import './movies.css';

interface IDiscoverData {
    discoverMovies: IMoviesData;
}

interface IGenreData {
    genres: [IGenre];
}

const MoviesPage: FC = () => {
    const [genreId, setGenreId] = useState('');
    const [year, setYear] = useState('2022');
    const [language, setLanguage] = useState('en');
    const [sortBy, setSortBy] = useState('popularity.desc');
    const [page, setPage] = useState(1);

    const { data: genresData } = useQuery<IGenreData>(GET_GENRES);
    console.log('genresData: ', genresData);
    const { loading, error, data } = useQuery<IDiscoverData>(GET_DISCOVER_MOVIES, {
        variables: {
            input: {
                genreId,
                year,
                language,
                sortBy,
                page,
            },
        },
    });
    console.log('data: ', data);

    if (error) return <ErrorMessage error={error} />;

    return (
        <>
            <Filter genres={genresData?.genres} setGenreId={setGenreId} setYear={setYear} setLanguage={setLanguage} setSortBy={setSortBy} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <MoviesList movies={data?.discoverMovies.results} />
                    <Pagination activePage={page} setActivePage={setPage} total={data?.discoverMovies.total_pages} />
                </>
            )}
        </>
    );
};

export default MoviesPage;
