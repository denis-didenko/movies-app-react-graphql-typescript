import { useContext } from 'react';

import { FilterStateContext, FilterSetStateContext } from '../../context/filter-context';

export const useFilterSetState = () => {
  const filterSetState = useContext(FilterSetStateContext);

  return filterSetState;
};

export const useFilterState = () => {
  const filterState = useContext(FilterStateContext);

  return filterState;
};
