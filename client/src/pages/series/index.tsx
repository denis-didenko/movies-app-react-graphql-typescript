import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { IGenre } from '../movies/types';
import { ISeriesData } from './types';
import { GET_DISCOVER_SERIES, GET_GENRES_SERIES } from './queries';
import SeriesList from './components/SeriesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import Genres from '../movies/components/filter/Genres';
import Years from '../movies/components/filter/Years';
import Countries from '../movies/components/filter/Countries';
import Networks from '../movies/components/filter/Networks';
import Sort from '../movies/components/filter/Sort';

interface IDiscoverTvData {
    discoverSeries: ISeriesData;
}

interface IGenreTvData {
    genresSeries: [IGenre];
}

const SeriesPage: FC = () => {
    const [genreId, setGenreId] = useState('');
    const [year, setYear] = useState('');
    const [language, setLanguage] = useState('');
    const [sortBy, setSortBy] = useState('popularity.desc');
    const [network, setNetwork] = useState('');
    const [page, setPage] = useState(1);

    const { data: genresData } = useQuery<IGenreTvData>(GET_GENRES_SERIES);
    const { loading, error, data } = useQuery<IDiscoverTvData>(GET_DISCOVER_SERIES, {
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
    });

    if (error) return <ErrorMessage error={error} />;

    return (
        <>
            <form className='filter-form'>
                <div className='form-item'>
                    <label className='form-label'>Жанр:</label>
                    <Genres genres={genresData?.genresSeries} setGenreId={setGenreId} />
                </div>
                <div className='form-item'>
                    <label className='form-label'>Рiк:</label>
                    <Years setYear={setYear} />
                </div>
                <div className='form-item'>
                    <label className='form-label'>Країна:</label>
                    <Countries setLanguage={setLanguage} />
                </div>
                <div className='form-item'>
                    <label className='form-label'>Телемережа:</label>
                    <Networks setNetwork={setNetwork} />
                </div>
                <div className='form-item'>
                    <label className='form-label'>Сортування:</label>
                    <Sort setSortBy={setSortBy} />
                </div>
            </form>

            {loading ? (
                <Loading />
            ) : (
                <>
                    <SeriesList series={data?.discoverSeries.results} />
                    <Pagination activePage={page} setActivePage={setPage} total={data?.discoverSeries.total_pages} />
                </>
            )}
        </>
    );
};

export default SeriesPage;
