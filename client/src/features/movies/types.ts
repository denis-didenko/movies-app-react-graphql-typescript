import { IDataResponse } from '../../types/data-response';
import { ICredits } from '../credits/types';
import { IGenre } from '../genres/types';
import { IProductionCompany } from '../production-companies/types';
import { IReview } from '../reviews/types';
import { IVideo } from '../videos/types';

export interface IMovie {
  __typename: string;
  id: number;
  title: string;
  original_title: string;
  name: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  runtime: number;
  homepage: string;
  popularity: number;
  production_companies: [IProductionCompany];
  genres: IGenre[];
  credits: ICredits;
  recommendations: IMovie[];
  videos: IVideo[];
  reviews: IReview[];
}

export interface IMoviesData extends IDataResponse {
  results: IMovie[];
}

export interface IUpcomingMoviesData {
  upcomingMovies: IMoviesData;
}

export interface INowPlayingMoviesData {
  nowPlayingMovies: IMoviesData;
}
