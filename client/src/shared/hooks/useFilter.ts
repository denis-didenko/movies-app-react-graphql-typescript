import { useContext } from 'react';

import { FilterStateContext, FilterSetStateContext } from '../../app/context/filter';

export const useFilterSetState = () => {
  const filterSetState = useContext(FilterSetStateContext);

  return filterSetState;
};

export const useFilterState = () => {
  const filterState = useContext(FilterStateContext);

  return filterState;
};
