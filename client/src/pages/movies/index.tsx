import MoviesDiscover from '../../features/discover/components/movies';
import FilterForm from '../../features/filter-form';

const MoviesPage = () => (
  <>
    <FilterForm filterType='movies' />
    <MoviesDiscover />
  </>
);

export default MoviesPage;
