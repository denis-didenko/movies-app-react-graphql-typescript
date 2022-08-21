import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IMovie } from '../types';
import { useApiImg } from '../../../hooks/useApiImg';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MovieItem: FC<IMovie> = ({ poster_path, title, id }) => {
    const { getFullImgPath } = useApiImg();

    return (
        <div className='movie-item'>
            <Link to={`/movie/${id}`}>
                <LazyLoadImage width={'100%'} height={'100%'} alt={title} src={getFullImgPath(poster_path)} effect='blur' />
            </Link>
        </div>
    );
};

export default MovieItem;
