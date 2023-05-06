import { IMoviesData, IMovie } from '@entities/movies';
import { IPersonsData, IPerson } from '@entities/person';
import { ISeriesData, ISeries } from '@entities/series';
import { IDataResponse } from '@shared/types';

export interface ISearchQuery {
  name: string;
  query: string;
}

export interface ISearchMoviesData {
  searchMovies: IMoviesData;
}

export interface ISearchSeriesData {
  searchSeries: ISeriesData;
}

export interface ISearchPersonsData {
  searchPerson: IPersonsData;
}

export interface ISearchMultiData {
  searchMulti: IMultiData;
}

export interface IMultiData extends IDataResponse {
  results: IMovie[] | ISeries[] | IPerson[];
}
