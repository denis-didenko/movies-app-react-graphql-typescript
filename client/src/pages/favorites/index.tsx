import { useState, useEffect } from 'react';

import { MovieList, IMovie } from '@entities/movies';
import { SeriesList, ISeries } from '@entities/series';
import { TFavoriteItems } from '@features/favorites';

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
      <MovieList movies={movies} />
      <h2>Серіали:</h2>
      <SeriesList series={series} />
    </div>
  );
};

export default FavoritesPage;
