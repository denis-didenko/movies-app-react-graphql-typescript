import { IMoviesData, IMovie } from '../movies/types';
import { ISeriesData, ISeries } from '../series/types';
import { IPersonsData, IPerson } from '../person/types';
import { IDataResponse } from '../../types/data-response';

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
