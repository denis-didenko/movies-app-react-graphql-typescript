import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_GENRES } from '../../../graphql/queries';
import { IGenreData } from '../types';
import GenreItem from './GenreItem';
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

    return (
        <>
            <div className='genres-list'>
                {data?.genres.map(genre => (
                    <GenreItem key={genre.id} genre={genre} genreId={genreId} setGenreId={setGenreId} />
                ))}
            </div>
        </>
    );
};

export default Genres;
