import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import FavoritesPage from '../pages/favorites';
import HomePage from '../pages/home';
import MoviesPage from '../pages/movies';
import MovieDetails from '../pages/movies-details';
import PersonDetails from '../pages/person';
import SearchPage from '../pages/search';
import SeriesPage from '../pages/series';
import SeriesDetails from '../pages/series-details';
import Layout from '../shared/layout';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='movies'>
          <Route index element={<MoviesPage />} />
          <Route path=':id' element={<MovieDetails />} />
        </Route>
        <Route path='series'>
          <Route index element={<SeriesPage />} />
          <Route path=':id' element={<SeriesDetails />} />
        </Route>
        <Route path='person/:id' element={<PersonDetails />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='favorites' element={<FavoritesPage />} />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
);

export default App;
