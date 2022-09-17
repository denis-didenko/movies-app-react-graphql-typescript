import { useContext } from 'react';

import FilterContext from '../../context/filter-context';

export const useFilter = () => {
  const ctx = useContext(FilterContext);

  return ctx;
};
