import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GET_PERSON } from './queries';
import { IPersonData } from './types';
import { useApi } from '../../hooks/useApi';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import MoviesList from '../movies/components/MoviesList';
import './person.css';

const PersonDetails: FC = () => {
    const { id } = useParams();
    const { getFullImgPath, sortMoviesByReleaseDate } = useApi();
    const { loading, error, data } = useQuery<IPersonData>(GET_PERSON, {
        variables: { id },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (!data) return null;
    console.log('data: ', data);

    const { name, birthday, biography, profile_path, place_of_birth, cast } = data.person;

    const birthdayDate = new Intl.DateTimeFormat('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(birthday));

    return (
        <div className='person-details'>
            <div className='person-details__poster'>
                <LazyLoadImage width={'100%'} height={'auto'} alt={name} src={getFullImgPath(profile_path)} effect='blur' />
            </div>
            <h1 className='person-details__title'>{name}</h1>
            <h3>Дата народження:</h3>
            <p>{birthdayDate}</p>
            <h3>Місце народження:</h3>
            <p>{place_of_birth}</p>
            <h3>Біографія:</h3>
            <p>{biography ? biography : 'Немає перекладу'}</p>
            <h3>Роботи:</h3>
            <MoviesList movies={sortMoviesByReleaseDate(cast).slice(0, 10)} />
        </div>
    );
};

export default PersonDetails;
