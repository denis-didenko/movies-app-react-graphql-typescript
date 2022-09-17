import SeriesDiscover from '../../features/discover/components/series';
import FilterForm from '../../features/filter-form';

const SeriesPage = () => (
  <>
    <FilterForm filterType='series' />
    <SeriesDiscover />
  </>
);

export default SeriesPage;
