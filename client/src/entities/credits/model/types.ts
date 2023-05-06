import { IPerson } from '../../person/model/types';

export interface ICredits {
  id: number;
  cast: [ICast];
  crew: [ICrew];
}

export interface ICreditsTv {
  id: number;
  cast: [ICast];
  crew: [ICrewAggregate];
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

export interface ICrewAggregate {
  id: number;
  name: string;
  department: string;
  profile_path: string;
  popularity: number;
  jobs: IJob[];
}

interface IJob {
  credit_id: string;
  job: string;
  episode_count: number;
}

export interface ICreator {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}
