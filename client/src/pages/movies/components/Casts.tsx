import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useApiImg } from '../../../hooks/useApiImg';
import { ICast } from '../types';

interface IProps {
    casts: ICast[];
}

const Casts: FC<IProps> = ({ casts }) => {
    const { getFullImgPath } = useApiImg();
    if (!casts.length) return <p>Casts not found</p>;

    return (
        <div className='cast-list'>
            {casts.map(({ id, name, profile_path }) => {
                if (!profile_path) return null;

                return (
                    <div key={name} className='cast-list__item'>
                        <Link to={`/person/${id}`}>
                            <LazyLoadImage width={'100%'} height={'auto'} alt={name} src={getFullImgPath(profile_path)} effect='blur' />
                        </Link>
                        <p>{name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Casts;
