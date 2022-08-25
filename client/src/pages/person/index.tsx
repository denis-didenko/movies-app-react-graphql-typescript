import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GET_PERSON } from '../../graphql/queries';
import { IPersonData } from '../movies/types';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useApiImg } from '../../hooks/useApiImg';
import './person.css';
import MoviesList from '../movies/components/MoviesList';

const PersonDetails: FC = () => {
    const { id } = useParams();
    const { getFullImgPath } = useApiImg();
    const { loading, error, data } = useQuery<IPersonData>(GET_PERSON, {
        variables: { id },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (!data) return null;
    console.log('data: ', data);

    const { name, birthday, biography, profile_path, place_of_birth, cast } = data.person;

    return (
        <div className='person-details'>
            <div className='person-details__poster'>
                <LazyLoadImage width={'100%'} height={'auto'} alt={name} src={getFullImgPath(profile_path)} effect='blur' />
            </div>
            <h1 className='person-details__title'>{name}</h1>
            <h3>Birthday:</h3>
            <p>{birthday}</p>
            <h3>Place of birth:</h3>
            <p>{place_of_birth}</p>
            <h3>Biography:</h3>
            <p>{biography}</p>
            <h3>Works:</h3>
            <MoviesList movies={cast.slice(0, 9)} />
        </div>
    );
};

export default PersonDetails;
