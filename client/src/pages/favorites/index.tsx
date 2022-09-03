import { useState, useEffect } from 'react';
import MoviesList from '../movies/components/MoviesList';
import SeriesList from '../series/components/SeriesList';
import { IMovie } from '../movies/types';
import { ISeries } from '../series/types';
import { TFavoriteItems } from './types';

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
