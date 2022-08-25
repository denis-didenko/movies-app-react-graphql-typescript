import { ICrew, IMovie } from './../pages/movies/types';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const useApi = () => {
    const getFullImgPath = (path: string) => {
        return `${IMG_URL}${path}`;
    };

    const getUniqueCrew = (array: ICrew[]) => [...new Set(array.filter(({ name }) => name))];

    const sortMoviesByReleaseDate = (movies: IMovie[]) => {
        return movies
            .filter(movie => movie.release_date)
            .sort((a, b) => {
                const aDate = new Date(a.release_date) as any;
                const bDate = new Date(b.release_date) as any;
                return bDate - aDate;
            });
    };

    return { getFullImgPath, getUniqueCrew, sortMoviesByReleaseDate };
};
