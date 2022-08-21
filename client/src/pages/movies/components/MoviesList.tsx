import { FC } from 'react';
import { IMovie } from '../types';
import MovieItem from './MovieItem';
import '../movies.css';

interface IProps {
    movies: IMovie[];
}

const MoviesList: FC<IProps> = ({ movies }) => {
    if (!movies) return <p>Movies not found</p>;

    return (
        <>
            <div className='movies-list'>
                {movies.map(movie => (
                    <MovieItem key={movie.id} {...movie} />
                ))}
            </div>
        </>
    );
};

export default MoviesList;
