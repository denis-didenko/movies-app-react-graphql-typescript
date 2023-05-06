import { FC, useState, FormEvent } from 'react';

import { ISearchQuery } from '../model/types';

interface IProps {
  setSearchQuery: (searchQuery: ISearchQuery) => void;
}

const defaultQueryState: ISearchQuery = {
  name: '',
  query: '',
};

export const SearchForm: FC<IProps> = ({ setSearchQuery }) => {
  const [queryMovies, setQueryMovies] = useState<ISearchQuery>(defaultQueryState);
  const [querySeries, setQuerySeries] = useState<ISearchQuery>(defaultQueryState);
  const [queryPerson, setQueryPerson] = useState<ISearchQuery>(defaultQueryState);

  const handleSubmitFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (queryMovies.query.length) {
      setSearchQuery(queryMovies);
      return;
    }
    if (querySeries.query.length) {
      setSearchQuery(querySeries);
      return;
    }
    if (queryPerson.query.length) {
      setSearchQuery(queryPerson);
    }
  };

  return (
    <form action='/search' className='search-form' onSubmit={handleSubmitFilter}>
      <div className='form-item'>
        <div className='form-label'>Фiльми:</div>
        <div className='form-field'>
          <input
            type='text'
            name='movies'
            placeholder='Введіть назву фільму'
            value={queryMovies.query}
            onChange={e => {
              setQueryMovies({ name: e.target.name, query: e.target.value });
              setQuerySeries(defaultQueryState);
              setQueryPerson(defaultQueryState);
            }}
          />
        </div>
      </div>
      <div className='form-item'>
        <div className='form-label'>Серiали:</div>
        <div className='form-field'>
          <input
            type='text'
            name='series'
            placeholder='Введіть назву серіалу'
            value={querySeries.query}
            onChange={e => {
              setQuerySeries({ name: e.target.name, query: e.target.value });
              setQueryMovies(defaultQueryState);
              setQueryPerson(defaultQueryState);
            }}
          />
        </div>
      </div>
      <div className='form-item'>
        <div className='form-label'>Актори:</div>
        <div className='form-field'>
          <input
            type='text'
            name='persons'
            placeholder='Введіть iм`я актора'
            value={queryPerson.query}
            onChange={e => {
              setQueryPerson({ name: e.target.name, query: e.target.value });
              setQuerySeries(defaultQueryState);
              setQueryMovies(defaultQueryState);
            }}
          />
        </div>
      </div>
      <div className='form-submit'>
        <button type='submit'>Пошук</button>
      </div>
    </form>
  );
};
