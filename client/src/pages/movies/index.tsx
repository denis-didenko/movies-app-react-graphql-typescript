import { FilterForm } from '@features/filter-form';
import { MoviesDiscover } from '@widgets/discover/movies';

const MoviesPage = () => (
  <>
    <FilterForm filterType='movies' />
    <MoviesDiscover />
  </>
);

export default MoviesPage;
