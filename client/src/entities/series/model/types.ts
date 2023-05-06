import { ICreator, ICreditsTv } from '@entities/credits';
import { IGenre } from '@entities/genres';
import { INetwork } from '@entities/networks';
import { IProductionCompany } from '@entities/production-companies';
import { IReview } from '@entities/reviews';
import { IVideo } from '@entities/videos';
import { IDataResponse } from '@shared/types';

export interface ISeries {
  __typename: string;
  id: number;
  name: string;
  overview: string;
  backdrop_path: string;
  homepage: string;
  vote_average: number;
  vote_count: number;
  created_by: ICreator[];
  first_air_date: string;
  next_episode_to_air: IEpisode;
  last_episode_to_air: IEpisode;
  original_language: string;
  original_name: string;
  in_production: boolean;
  status: string;
  tagline: string;
  type: string;
  languages: string[];
  networks: INetwork[];
  last_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  popularity: number;
  poster_path: string;
  production_companies: [IProductionCompany];
  seasons: ISeason[];
  genres: IGenre[];
  credits: ICreditsTv;
  recommendations: ISeries[];
  videos: IVideo[];
  reviews: IReview[];
}

export interface ISeriesData extends IDataResponse {
  results: ISeries[];
}

export interface ISeason {
  id: number;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  episodes: IEpisode[];
}

export interface IEpisode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  videos: IEpisodeVideo[];
}

interface IEpisodeVideo {
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
