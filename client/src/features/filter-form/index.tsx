import { FC } from 'react';

import Genres from '../genres/components/GenresDropdown';
import Networks from '../networks/components/NetworksDropdown';
import ProductionCompanies from '../production-companies/components/ProductionCompaniesDropdown';

import Countries from './components/Countries';
import Providers from './components/Providers';
import Sort from './components/Sort';
import Years from './components/Years';
import { FilterType } from './types';
import './filter-form.css'; // eslint-disable-line

interface IProps {
  filterType: FilterType;
}

const FilterForm: FC<IProps> = ({ filterType }) => (
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

export default FilterForm;
