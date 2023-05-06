import { FilterForm } from '@features/filter-form';
import { SeriesDiscover } from '@widgets/discover/series';

const SeriesPage = () => (
  <>
    <FilterForm filterType='series' />
    <SeriesDiscover />
  </>
);

export default SeriesPage;
