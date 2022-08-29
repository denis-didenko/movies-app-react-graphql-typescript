import { FC, memo } from 'react';
import { IGenre } from '../../types';
import Countries from './Countries';
import Genres from './Genres';
import Sort from './Sort';
import Years from './Years';

interface IProps {
    genres: [IGenre] | undefined;
    setGenreId: (genreId: string) => void;
    setYear: (year: string) => void;
    setLanguage: (country: string) => void;
    setSortBy: (sortBy: string) => void;
}

const Filter: FC<IProps> = ({ genres, setGenreId, setYear, setLanguage, setSortBy }) => {
    console.count('Filter: ');
    return (
        <form className='filter-form'>
            <div className='form-item'>
                <label className='form-label'>Жанр:</label>
                {genres && <Genres genres={genres} setGenreId={setGenreId} />}
            </div>
            <div className='form-item'>
                <label className='form-label'>Рiк:</label>
                <Years setYear={setYear} />
            </div>
            <div className='form-item'>
                <label className='form-label'>Країна:</label>
                <Countries setLanguage={setLanguage} />
            </div>
            <div className='form-item'>
                <label className='form-label'>Сортування:</label>
                <Sort setSortBy={setSortBy} />
            </div>
        </form>
    );
};

export default memo(Filter);
