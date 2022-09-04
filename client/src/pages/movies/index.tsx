import { useState } from 'react';
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

const MoviesPage = () => {
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
          <div className='form-label'>Жанр:</div>
          <Genres genres={genresData?.genres} setGenreId={setGenreId} />
        </div>
        <div className='form-item'>
          <div className='form-label'>Рiк:</div>
          <Years setYear={setYear} />
        </div>
        <div className='form-item'>
          <div className='form-label'>Країна:</div>
          <Countries setLanguage={setLanguage} />
        </div>
        <div className='form-item'>
          <div className='form-label'>Телекомпанія:</div>
          <ProductionCompanies setCompany={setCompany} />
        </div>
        <div className='form-item'>
          <div className='form-label'>Телепровайдер:</div>
          <Providers setProvider={setProvider} />
        </div>
        <div className='form-item'>
          <div className='form-label'>Сортування:</div>
          <Sort setSortBy={setSortBy} />
        </div>
      </form>

      {loading ? (
        <Loading />
      ) : (
        <>
          <MoviesList movies={data?.discoverMovies.results} />
          <Pagination
            activePage={page}
            setActivePage={setPage}
            total={data?.discoverMovies.total_pages}
          />
        </>
      )}
    </>
  );
};

export default MoviesPage;
