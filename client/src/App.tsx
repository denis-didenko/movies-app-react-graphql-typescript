import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import MovieDetails from './pages/movies/components/MovieDetails';
import SeriesPage from './pages/series';
import SeriesDetails from './pages/series/components/SeriesDetails';
import SearchPage from './pages/search';
import PersonDetails from './pages/person';

import './App.css';

const App: FC = () => {
    return (
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
            </Route>

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default App;
