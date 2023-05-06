import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { getImgUrl } from '@shared/api/tmdb';

import { IPerson } from '../model/types';

import 'react-lazy-load-image-component/src/effects/blur.css';

const PersonItem: FC<IPerson> = ({ id, name, profile_path }) => {
  if (!profile_path) return null;

  return (
    <div className='movie-item'>
      <div className='movie-pic'>
        <Link to={`/person/${id}`}>
          <LazyLoadImage
            width='100%'
            height='100%'
            alt={name}
            src={getImgUrl(profile_path, true)}
            effect='blur'
            delayMethod='debounce'
          />
        </Link>
      </div>
      <div className='movie-title'>{name}</div>
    </div>
  );
};

export default PersonItem;
