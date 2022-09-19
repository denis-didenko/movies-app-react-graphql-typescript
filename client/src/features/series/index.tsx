import { FC, memo } from 'react';

import SeriesItem from './components/SeriesItem';
import { ISeries } from './types';

interface IProps {
  series: ISeries[] | undefined;
}

const SeriesList: FC<IProps> = ({ series }) => {
  if (!series || !series.length) return <p>Серіалів не знайдено</p>;

  return (
    <div className='movies-list'>
      {series.map(serie => (
        <SeriesItem key={serie.id} {...serie} />
      ))}
    </div>
  );
};

export default memo(SeriesList);
