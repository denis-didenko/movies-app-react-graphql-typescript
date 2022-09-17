import { IDataResponse } from '../../types/data-response';
import { IMoviesData, IMovie } from '../movies/types';
import { IPersonsData, IPerson } from '../person/types';
import { ISeriesData, ISeries } from '../series/types';

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
