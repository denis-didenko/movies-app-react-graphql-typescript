import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { useApi } from '../../../hooks/useApi';
import { IPerson } from '../types';

import 'react-lazy-load-image-component/src/effects/blur.css'; // eslint-disable-line

const PersonItem: FC<IPerson> = ({ id, name, profile_path }) => {
  const { getCropImgPath } = useApi();
  if (!profile_path) return null;

  return (
    <div className='movie-item'>
      <div className='movie-pic'>
        <Link to={`/person/${id}`}>
          <LazyLoadImage
            width='100%'
            height='100%'
            alt={name}
            src={getCropImgPath(profile_path)}
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
