import { ISeries } from './../series/types';
import { IMovie } from './../movies/types';

export type TFavoriteItem = IMovie | ISeries;
export type TFavoriteItems = (IMovie | ISeries)[];
