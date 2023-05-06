import { ICrew, ICrewAggregate } from '@entities/credits';
import { IMovie } from '@entities/movies';
import { ISeries } from '@entities/series';

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const IMG_URL_CROPPED = 'https://image.tmdb.org/t/p/w500';

export function getImgUrl(path: string, cropped = false): string {
  return `${cropped ? IMG_URL_CROPPED : IMG_URL}${path}`;
}

export const getUniqueCrew = (array: ICrew[]) => [...new Set(array.filter(({ name }) => name))];
export const getUniqueCrewAggregate = (array: ICrewAggregate[]) => [
  ...new Set(array.filter(({ name }) => name)),
];

export const sortMoviesByReleaseDate = (movies: IMovie[]) => {
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

export const sortMoviesByPopularity = (movies: IMovie[]) => {
  const uniqueMovies = [...new Set(movies.filter(({ id }) => id))];

  return uniqueMovies.filter(movie => movie.popularity).sort((a, b) => b.popularity - a.popularity);
};

export const sortSeriesByRating = (series: ISeries[]) =>
  series
    .filter(serie => serie.vote_average)
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10);
