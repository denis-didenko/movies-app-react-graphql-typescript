import { FC } from 'react';
import { useQuery } from '@apollo/client';
import FormSelect from '../../../components/Form/select';
import { IGenreMoviesData, IGenreSeriesData } from '../types';
import { GET_GENRES_MOVIES, GET_GENRES_SERIES } from '../queries';
import { useFilter } from '../../filter-form/useFilter';
import { FilterType } from '../../filter-form/types';

interface IProps {
  filterType: FilterType;
}

const Genres: FC<IProps> = ({ filterType }) => {
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

export default Genres;
