import FilterForm from '../../features/filter-form';
import SeriesDiscover from '../../features/discover/components/series';

const SeriesPage = () => (
  <>
    <FilterForm filterType='series' />
    <SeriesDiscover />
  </>
);

export default SeriesPage;
