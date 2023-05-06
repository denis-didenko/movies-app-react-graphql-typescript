import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { getImgUrl } from '@shared/api/tmdb';

import { IMovie } from '../model/types';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const MovieItem: FC<IMovie> = ({ poster_path, title, name, id, vote_average }) => {
  if (!poster_path) return null;

  return (
    <div className='movie-item'>
      <div className='movie-pic'>
        <Link to={`/movies/${id}`}>
          <LazyLoadImage
            width='100%'
            height='100%'
            alt={title}
            src={getImgUrl(poster_path, true)}
            effect='blur'
            delayMethod='debounce'
          />
        </Link>
        <div className='movie-rating'>
          TMDB:
          {vote_average}
        </div>
      </div>
      <div className='movie-title'>{name || title}</div>
    </div>
  );
};
