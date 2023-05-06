import { FC, memo } from 'react';

import { SeriesItem } from './SeriesItem';
import { ISeries } from '../model/types';

interface IProps {
  series: ISeries[];
}

const SerieList: FC<IProps> = ({ series }) => {
  if (!series || !series.length) return <p>Серіалів не знайдено</p>;

  return (
    <div className='movies-list'>
      {series.map(serie => (
        <SeriesItem key={serie.id} {...serie} />
      ))}
    </div>
  );
};

export const SeriesList = memo(SerieList);
