import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useApi } from '../../../hooks/useApi';
import { ICast, ICrew } from '../types';
import { ICrewAggregate, ICreator } from '../../series/types';

interface IProps {
    casts: ICast[] | ICrew[] | ICrewAggregate[] | ICreator[];
}

const Casts: FC<IProps> = ({ casts }) => {
    const { getFullImgPath } = useApi();

    if (!casts.length) return <p>Не знайдено</p>;

    return (
        <div className='cast-list'>
            {casts.map(({ id, name, profile_path }) => {
                //if (!profile_path) return null;

                return (
                    <Link to={`/person/${id}`} key={id} className='cast-list__item'>
                        <div className='cast-list__item-img'>
                            <LazyLoadImage width={'100%'} height={'100%'} alt={name} src={getFullImgPath(profile_path)} effect='blur' />
                        </div>

                        <p>{name}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Casts;
