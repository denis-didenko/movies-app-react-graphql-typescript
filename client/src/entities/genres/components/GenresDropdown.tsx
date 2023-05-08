import { FC } from 'react';

import { useQuery } from '@apollo/client';
import { FilterType } from '@features/filter-form/model/types';
import FormSelect from '@shared/components/Form/select';
import { useFilter } from '@shared/hooks/useFilter';

import { GET_GENRES_MOVIES, GET_GENRES_SERIES } from '../api/queries';
import { IGenreMoviesData, IGenreSeriesData } from '../model/types';

interface IProps {
  filterType: FilterType;
}

export const Genres: FC<IProps> = ({ filterType }) => {
  const { data: genresMovies } = useQuery<IGenreMoviesData>(GET_GENRES_MOVIES);
  const { data: genresSeries } = useQuery<IGenreSeriesData>(GET_GENRES_SERIES);
  const { setGenreId } = useFilter();

  const genres = filterType === 'movies' ? genresMovies?.genres : genresSeries?.genresSeries;

  const mappedGenres = genres?.map(genre => ({
    id: genre.id,
    value: genre.name,
  }));
  mappedGenres?.unshift({ id: '', value: 'Всi' });

  return <FormSelect options={mappedGenres} onChangeHandler={setGenreId} />;
};
