import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_GENRES } from '../queries';
import { IGenreData } from '../types';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';

interface IProps {
    genreId: string[];
    setGenreId: (genreId: string[]) => void;
}

const Genres: FC<IProps> = ({ genreId, setGenreId }) => {
    const { data, loading, error } = useQuery<IGenreData>(GET_GENRES);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    const addGenreHandler = (id: string) => {
        if (genreId.includes(id)) {
            setGenreId(genreId.filter(genreId => genreId !== id));
            return;
        }

        setGenreId([...genreId, id]);
    };

    return (
        <>
            <div className='genres-list'>
                {data?.genres.map(genre => (
                    <div
                        key={genre.id}
                        data-genre-id={genre.id}
                        className={genreId.includes(genre.id) ? 'genre is-active' : 'genre'}
                        onClick={() => addGenreHandler(genre.id)}
                    >
                        {genre.name}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Genres;
