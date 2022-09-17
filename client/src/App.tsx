import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import FavoritesPage from './pages/favorites';
import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import MovieDetails from './pages/movies-details';
import PersonDetails from './pages/person';
import SearchPage from './pages/search';
import SeriesDetails from './pages/series-details';
import SeriesPage from './pages/series/index';
import './App.css'; // eslint-disable-line

const App = () => (
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
);

export default App;
