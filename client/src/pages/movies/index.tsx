import { FC, useState } from 'react';
import Genres from './components/Genres';
import Sort from './components/Sort';
import './movies.css';

const MoviesPage: FC = () => {
    const [genre, setGenre] = useState(0);
    const [sortType, setSortType] = useState('');
    const [sortAscending, setSortAscending] = useState(false);

    return (
        <>
            <Genres setGenre={setGenre} />
            <Sort sortType={sortType} setSortType={setSortType} sortAscending={sortAscending} setSortAscending={setSortAscending} />
        </>
    );
};

export default MoviesPage;
