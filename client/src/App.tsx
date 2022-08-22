import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import MoviesPage from './pages/movies';
import MovieDetails from './pages/movies/components/MovieDetails';
import CategoriesPage from './pages/categories';
import CategoryDetails from './pages/categories/components/CategoryDetails';
import SearchPage from './pages/search';

import './App.css';

const App: FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='movie'>
                    <Route index element={<MoviesPage />} />
                    <Route path=':id' element={<MovieDetails />} />
                </Route>
                <Route path='categories'>
                    <Route index element={<CategoriesPage />} />
                    <Route path=':category' element={<CategoryDetails />} />
                </Route>
                <Route path='search' element={<SearchPage />} />
            </Route>

            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default App;
