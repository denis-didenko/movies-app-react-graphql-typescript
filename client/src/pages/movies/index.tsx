import { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DISCOVER_MOVIES, GET_GENRES } from './queries';
import { IGenre, IMoviesData } from './types';
import MoviesList from './components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import Genres from './components/filter/Genres';
import Years from './components/filter/Years';
import Countries from './components/filter/Countries';
import ProductionCompanies from './components/filter/ProductionCompanies';
import Providers from './components/filter/Providers';
import Sort from './components/filter/Sort';

interface IDiscoverData {
    discoverMovies: IMoviesData;
}

interface IGenreData {
    genres: [IGenre];
}

const MoviesPage: FC = () => {
    const [genreId, setGenreId] = useState('');
    const [year, setYear] = useState('');
    const [language, setLanguage] = useState('');
    const [sortBy, setSortBy] = useState('popularity.desc');
    const [company, setCompany] = useState('');
    const [provider, setProvider] = useState('');
    const [page, setPage] = useState(1);

    const { data: genresData } = useQuery<IGenreData>(GET_GENRES);
    const { loading, error, data } = useQuery<IDiscoverData>(GET_DISCOVER_MOVIES, {
        variables: {
            input: {
                genreId,
                year,
                language,
                sortBy,
                company,
                provider,
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
                    <Genres genres={genresData?.genres} setGenreId={setGenreId} />
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
                    <label className='form-label'>Телекомпанія:</label>
                    <ProductionCompanies setCompany={setCompany} />
                </div>
                <div className='form-item'>
                    <label className='form-label'>Телепровайдер:</label>
                    <Providers setProvider={setProvider} />
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
                    <MoviesList movies={data?.discoverMovies.results} />
                    <Pagination activePage={page} setActivePage={setPage} total={data?.discoverMovies.total_pages} />
                </>
            )}
        </>
    );
};

export default MoviesPage;
