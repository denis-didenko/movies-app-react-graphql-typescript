import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { getImgUrl } from '@shared/api/tmdb';

import { ICast, ICrew, ICrewAggregate, ICreator } from '../model/types';
import '../credits.css';

interface IProps {
  casts: ICast[] | ICrew[] | ICrewAggregate[] | ICreator[];
}

export const Casts: FC<IProps> = ({ casts }) => {
  if (!casts.length) return <p>Не знайдено</p>;

  return (
    <div className='cast-list'>
      {casts.map(({ id, name, profile_path }) => (
        <Link to={`/person/${id}`} key={id} className='cast-list__item'>
          <div className='cast-list__item-img'>
            <LazyLoadImage
              width='100%'
              height='100%'
              alt={name}
              src={getImgUrl(profile_path, true)}
              effect='blur'
            />
          </div>

          <p>{name}</p>
        </Link>
      ))}
    </div>
  );
};
