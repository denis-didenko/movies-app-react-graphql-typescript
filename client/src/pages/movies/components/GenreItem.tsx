import { FC } from 'react';
import { IGenre } from '../types';

interface IProps {
    genre: IGenre;
    genreId: string[];
    setGenreId: (genreId: string[]) => void;
}

const GenreItem: FC<IProps> = ({ genre, genreId, setGenreId }) => {
    const addGenreHandler = (id: string) => {
        if (genreId.includes(id)) {
            setGenreId(genreId.filter(genreId => genreId !== id));
            return;
        }

        setGenreId([...genreId, id]);
    };

    return (
        <div
            key={genre.id}
            data-genre-id={genre.id}
            className={genreId.includes(genre.id) ? 'genre is-active' : 'genre'}
            onClick={() => addGenreHandler(genre.id)}
        >
            {genre.name}
        </div>
    );
};

export default GenreItem;
