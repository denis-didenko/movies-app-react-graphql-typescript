import { ICredits } from '@entities/credits';
import { IGenre } from '@entities/genres';
import { IProductionCompany } from '@entities/production-companies';
import { IReview } from '@entities/reviews';
import { IVideo } from '@entities/videos';
import { IDataResponse } from '@shared/types';

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
