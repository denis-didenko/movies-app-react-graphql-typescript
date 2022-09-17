import { FC } from 'react';

import PersonItem from './components/PersonItem';
import { IPerson } from './types';

interface IProps {
  persons: IPerson[] | undefined;
}

const PersonList: FC<IProps> = ({ persons }) => {
  if (!persons || !persons.length) return <p>Не знайдено жодного актора</p>;

  return (
    <div className='movies-list'>
      {persons.map(person => (
        <PersonItem key={person.id} {...person} />
      ))}
    </div>
  );
};

export default PersonList;
