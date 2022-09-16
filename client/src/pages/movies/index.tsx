import FilterForm from '../../features/filter-form';
import MoviesDiscover from '../../features/discover/components/movies';

const MoviesPage = () => (
  <>
    <FilterForm filterType='movies' />
    <MoviesDiscover />
  </>
);

export default MoviesPage;
