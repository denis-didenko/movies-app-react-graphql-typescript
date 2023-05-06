import { FC } from 'react';

import { Genres } from '@entities/genres';
import { Networks } from '@entities/networks';
import { ProductionCompanies } from '@entities/production-companies';

import Countries from './Countries';
import Providers from './Providers';
import Sort from './Sort';
import Years from './Years';
import { FilterType } from '../model/types';
import '../filter-form.css';

interface IProps {
  filterType: FilterType;
}

export const FilterForm: FC<IProps> = ({ filterType }) => (
  <form className='filter-form'>
    <div className='form-item'>
      <div className='form-label'>Жанр:</div>
      <Genres filterType={filterType} />
    </div>
    <div className='form-item'>
      <div className='form-label'>Рiк:</div>
      <Years />
    </div>
    <div className='form-item'>
      <div className='form-label'>Країна:</div>
      <Countries />
    </div>
    {filterType === 'movies' && (
      <>
        <div className='form-item'>
          <div className='form-label'>Телекомпанія:</div>
          <ProductionCompanies />
        </div>
        <div className='form-item'>
          <div className='form-label'>Телепровайдер:</div>
          <Providers />
        </div>
      </>
    )}
    {filterType === 'series' && (
      <div className='form-item'>
        <div className='form-label'>Телемережа:</div>
        <Networks />
      </div>
    )}
    <div className='form-item'>
      <div className='form-label'>Сортування:</div>
      <Sort />
    </div>
  </form>
);
