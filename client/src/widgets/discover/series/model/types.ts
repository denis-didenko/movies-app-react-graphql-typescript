import { ISeriesData } from '@entities/series/model/types';

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
