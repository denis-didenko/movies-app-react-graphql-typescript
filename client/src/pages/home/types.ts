import { IMovie } from '../movies/types';

export interface IUpcomingMoviesQuery {
    upcomingMovies: IMovie[];
}

export interface INowPlayingMoviesQuery {
    nowPlayingMovies: IMovie[];
}
