import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { useApi } from '../../../hooks/useApi';
import { ISeries } from '../types';

import 'react-lazy-load-image-component/src/effects/blur.css'; // eslint-disable-line

const MovieItem: FC<ISeries> = ({ poster_path, name, id, vote_average }) => {
  const { getFullImgPath } = useApi();
  if (!poster_path) return null;

  return (
    <div className='movie-item'>
      <div className='movie-pic'>
        <Link to={`/series/${id}`}>
          <LazyLoadImage
            width='100%'
            height='100%'
            alt={name}
            src={getFullImgPath(poster_path)}
            effect='blur'
            delayMethod='debounce'
          />
        </Link>
        <div className='movie-rating'>
          TMDB:
          {vote_average}
        </div>
      </div>
      <div className='movie-title'>{name}</div>
    </div>
  );
};

export default MovieItem;
