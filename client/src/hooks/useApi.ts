import { ICrew, ICrewAggregate } from '../features/credits/types';
import { IMovie } from '../features/movies/types';
import { ISeries } from '../features/series/types';

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const IMG_URL_CROPPED = 'https://image.tmdb.org/t/p/w500';

export const useApi = () => {
  const getFullImgPath = (path: string) => `${IMG_URL}${path}`;
  const getCropImgPath = (path: string) => `${IMG_URL_CROPPED}${path}`;

  const getUniqueCrew = (array: ICrew[]) => [...new Set(array.filter(({ name }) => name))];
  const getUniqueCrewAggregate = (array: ICrewAggregate[]) => [
    ...new Set(array.filter(({ name }) => name)),
  ];

  const sortMoviesByReleaseDate = (movies: IMovie[]) => {
    // remove movies with same id
    const uniqueMovies = [...new Set(movies.filter(({ id }) => id))];

    return uniqueMovies
      .filter(movie => movie.release_date)
      .sort((a, b) => {
        const aDate = new Date(a.release_date) as Date;
        const bDate = new Date(b.release_date) as Date;

        return bDate.getTime() - aDate.getTime();
      });
  };

  const sortSeriesByRating = (series: ISeries[]) =>
    series // eslint-disable-line
      .filter(serie => serie.vote_average)
      .sort((a, b) => b.vote_average - a.vote_average)
      .slice(0, 10);

  const sortMoviesByPopularity = (movies: IMovie[]) => {
    const uniqueMovies = [...new Set(movies.filter(({ id }) => id))];

    return uniqueMovies
      .filter(movie => movie.popularity)
      .sort((a, b) => b.popularity - a.popularity);
  };

  return {
    getFullImgPath,
    getCropImgPath,
    getUniqueCrew,
    getUniqueCrewAggregate,
    sortMoviesByReleaseDate,
    sortSeriesByRating,
    sortMoviesByPopularity,
  };
};
