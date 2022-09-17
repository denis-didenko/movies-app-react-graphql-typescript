import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { useApi } from '../../../hooks/useApi';
import { ICreator } from '../../series/types';
import { ICast, ICrew, ICrewAggregate } from '../types';
import '../credits.css'; // eslint-disable-line

interface IProps {
  casts: ICast[] | ICrew[] | ICrewAggregate[] | ICreator[];
}

const Casts: FC<IProps> = ({ casts }) => {
  const { getFullImgPath } = useApi();

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
              src={getFullImgPath(profile_path)}
              effect='blur'
            />
          </div>

          <p>{name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Casts;
