import { IPerson } from '../person/types';

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

export interface IDataResponse {
  page: number;
  total_results: number;
  total_pages: number;
}

export interface IMoviesData extends IDataResponse {
  results: IMovie[];
}

export interface IGenre {
  id: string;
  name: string;
}

export interface IProductionCompany {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface ICredits {
  id: number;
  cast: [ICast];
  crew: [ICrew];
}

export interface IVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export interface ICast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
  job: string;
  department: string;
  person: IPerson;
}

export interface ICrew {
  id: number;
  name: string;
  department: string;
  job: string;
  profile_path: string;
}

export interface IReview {
  id: number;
  author_details: ReviewAuthor;
  content: string;
  created_at: string;
}

interface ReviewAuthor {
  username: string;
  avatar_path: string;
}
