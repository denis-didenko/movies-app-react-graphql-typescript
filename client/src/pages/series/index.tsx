import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { IGenre, IMoviesData } from '../movies/types';
import { GET_DISCOVER_SERIES, GET_GENRES_SERIES } from './queries';
import MoviesList from '../movies/components/MoviesList';
import Filter from '../movies/components/filter';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';

interface IDiscoverTvData {
    discoverSeries: IMoviesData;
}

interface IGenreTvData {
    genresSeries: [IGenre];
}

const SeriesPage: FC = () => {
    const [genreId, setGenreId] = useState('');
    const [year, setYear] = useState('2022');
    const [language, setLanguage] = useState('en');
    const [sortBy, setSortBy] = useState('popularity.desc');
    const [page, setPage] = useState(1);

    const { data: genresData } = useQuery<IGenreTvData>(GET_GENRES_SERIES);
    const { loading, error, data } = useQuery<IDiscoverTvData>(GET_DISCOVER_SERIES, {
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
            <Filter
                genres={genresData?.genresSeries}
                setGenreId={setGenreId}
                setYear={setYear}
                setLanguage={setLanguage}
                setSortBy={setSortBy}
            />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <MoviesList movies={data?.discoverSeries.results} />
                    <Pagination activePage={page} setActivePage={setPage} total={data?.discoverSeries.total_pages} />
                </>
            )}
        </>
    );
};

export default SeriesPage;
