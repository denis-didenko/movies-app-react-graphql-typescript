import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IPerson } from '../types';
import { useApi } from '../../../hooks/useApi';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PersonItem: FC<IPerson> = ({ id, name, profile_path }) => {
    const { getFullImgPath } = useApi();
    if (!profile_path) return null;

    return (
        <div className='movie-item'>
            <div className='movie-pic'>
                <Link to={`/person/${id}`}>
                    <LazyLoadImage
                        width={'100%'}
                        height={'100%'}
                        alt={name}
                        src={getFullImgPath(profile_path)}
                        effect='blur'
                        delayMethod='debounce'
                    />
                </Link>
            </div>
            <div className='movie-title'>{name}</div>
        </div>
    );
};

export default PersonItem;
