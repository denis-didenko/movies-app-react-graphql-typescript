import { FC } from 'react';

import PersonItem from './PersonItem';
import { IPerson } from '../model/types';

interface IProps {
  persons: IPerson[];
}

export const PersonList: FC<IProps> = ({ persons }) => {
  if (!persons || !persons.length) return <p>Не знайдено жодного актора</p>;

  return (
    <div className='movies-list'>
      {persons.map(person => (
        <PersonItem key={person.id} {...person} />
      ))}
    </div>
  );
};
