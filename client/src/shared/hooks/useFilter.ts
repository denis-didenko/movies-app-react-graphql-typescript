import { useContext } from 'react';

import { FilterContext } from '@app/context/filter';

export const useFilter = () => {
  const filter = useContext(FilterContext);

  return filter;
};
