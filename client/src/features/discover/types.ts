import { IMoviesData } from '../movies/types';
import { ISeriesData } from '../series/types';

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

export interface IDiscoverTvData {
  discoverSeries: ISeriesData;
}

export interface IDiscoverTvVariables {
  input: {
    genreId: string;
    year: string;
    language: string;
    sortBy: string;
    network: string;
    page: number;
  };
}
