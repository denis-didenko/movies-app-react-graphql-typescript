import { IMovie } from '@entities/movies';
import { ISeries } from '@entities/series';

export type TFavoriteItem = IMovie | ISeries;
export type TFavoriteItems = (IMovie | ISeries)[];
