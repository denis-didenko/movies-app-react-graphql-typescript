import { FC, memo } from 'react';

import MovieItem from './components/MovieItem';
import { IMovie } from './types'; // eslint-disable-line

import './movies.css'; // eslint-disable-line

interface IProps {
  movies: IMovie[] | undefined;
}

const MoviesList: FC<IProps> = ({ movies }) => {
  if (!movies || !movies.length) return <p>Фiльмiв не знайдено</p>;

  return (
    <div className='movies-list'>
      {movies.map(movie => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default memo(MoviesList);
