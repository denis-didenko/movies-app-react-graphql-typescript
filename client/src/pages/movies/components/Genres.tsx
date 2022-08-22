import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_GENRES } from '../../../graphql/queries';
import { IGenreQuery } from '../types';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';

interface IProps {
    setGenre: (genre: number) => void;
}

const Genres: FC<IProps> = ({ setGenre }) => {
    const { data, loading, error } = useQuery<IGenreQuery>(GET_GENRES);

    if (loading || !data) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    return (
        <>
            <div className='genres-list'>
                <div className='genre is-active'>
                    <div className='genre-name'>All</div>
                </div>
                {data.genres.map(genre => (
                    <div key={genre.id} className='genre' onClick={() => setGenre(genre.id)}>
                        {genre.name}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Genres;
