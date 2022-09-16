import { FC } from 'react';
import { ISeries } from './types';
import SeriesItem from './components/SeriesItem';
// import '../../movies/movies.css';

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

export default SeriesList;
