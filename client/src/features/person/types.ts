import { IDataResponse } from '../../types/data-response';
import { IMovie } from '../movies/types';

export interface IPerson {
  id: number;
  name: string;
  profile_path: string;
  biography: string;
  birthday: string;
  deathday: string;
  place_of_birth: string;
  cast: IMovie[];
}

export interface IPersonData {
  person: IPerson;
}

export interface IPersonVariables {
  id: string;
}

export interface IPersonsData extends IDataResponse {
  results: IPerson[];
}
