import { IMoviesData } from '@entities/movies/model/types';

export interface IDiscoverData {
  discoverMovies: IMoviesData;
}

export interface IDiscoverVariables {
  input: {
    genreId: string;
    year: string;
    language: string;
    sortBy: string;
    company: string;
    provider: string;
    page: number;
  };
}
