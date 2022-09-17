import { useState, useEffect } from 'react';

import { TFavoriteItems } from '../../features/favorites/types';
import MoviesList from '../../features/movies';
import { IMovie } from '../../features/movies/types';
import SeriesList from '../../features/series';
import { ISeries } from '../../features/series/types';

import './favorites.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<TFavoriteItems>([]);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    setFavorites(watchlist);
  }, []);

  const movies = favorites.filter(item => item.__typename === 'Movie') as IMovie[];
  const series = favorites.filter(item => item.__typename === 'Series') as ISeries[];

  return (
    <div className='favorites-page'>
      <h2>Фiльми:</h2>
      <MoviesList movies={movies} />
      <h2>Серіали:</h2>
      <SeriesList series={series} />
    </div>
  );
};

export default FavoritesPage;
