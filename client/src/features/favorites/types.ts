import { IMovie } from '../movies/types';
import { ISeries } from '../series/types';

export type TFavoriteItem = IMovie | ISeries;
export type TFavoriteItems = (IMovie | ISeries)[];
