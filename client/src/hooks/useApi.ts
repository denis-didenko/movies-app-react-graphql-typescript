import { ICrewAggregate, ISeries } from './../pages/series/types';
import { ICrew, IMovie } from './../pages/movies/types';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const useApi = () => {
    const getFullImgPath = (path: string) => {
        return `${IMG_URL}${path}`;
    };

    const getUniqueCrew = (array: ICrew[]) => [...new Set(array.filter(({ name }) => name))];
    const getUniqueCrewAggregate = (array: ICrewAggregate[]) => [...new Set(array.filter(({ name }) => name))];

    const sortMoviesByReleaseDate = (movies: IMovie[]) => {
        return movies
            .filter(movie => movie.release_date)
            .sort((a, b) => {
                const aDate = new Date(a.release_date) as Date;
                const bDate = new Date(b.release_date) as Date;

                return aDate.getTime() - bDate.getTime();
                //return bDate - aDate;
            });
    };

    const sortSeriesByRating = (series: ISeries[]) => {
        return series
            .filter(serie => serie.vote_average)
            .sort((a, b) => {
                return b.vote_average - a.vote_average;
            })
            .slice(0, 10);
    };

    const sortMoviesByPopularity = (movies: IMovie[]) => {
        return movies.filter(movie => movie.popularity).sort((a, b) => b.popularity - a.popularity);
    };

    return {
        getFullImgPath,
        getUniqueCrew,
        getUniqueCrewAggregate,
        sortMoviesByReleaseDate,
        sortSeriesByRating,
        sortMoviesByPopularity,
    };
};
