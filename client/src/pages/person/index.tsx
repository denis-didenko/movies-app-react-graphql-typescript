import { useQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import MoviesList from '../../features/movies';
import { GET_PERSON } from '../../features/person/queries';
import { IPersonData, IPersonVariables } from '../../features/person/types';
import { useApi } from '../../hooks/useApi';

import './person.css';

const PersonDetails = () => {
  const { id } = useParams() as { id: string };
  const { getCropImgPath, sortMoviesByReleaseDate, sortMoviesByPopularity } = useApi();
  const { loading, error, data } = useQuery<IPersonData, IPersonVariables>(GET_PERSON, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return null;

  const { name, birthday, biography, profile_path, place_of_birth, cast } = data.person; // eslint-disable-line

  const birthdayDate = new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(birthday));

  return (
    <div className='person-details'>
      <div className='person-details__poster'>
        <LazyLoadImage
          width='100%'
          height='auto'
          alt={name}
          src={getCropImgPath(profile_path)}
          effect='blur'
        />
      </div>
      <h1 className='person-details__title'>{name}</h1>
      <h3>Дата народження:</h3>
      <p>{birthdayDate}</p>
      <h3>Місце народження:</h3>
      <p>{place_of_birth}</p>
      <h3>Біографія:</h3>
      <p>{biography || 'Немає перекладу'}</p>
      <h2>Останні роботи:</h2>
      <MoviesList movies={sortMoviesByReleaseDate(cast).slice(0, 10)} />
      <h2>Популярні роботи:</h2>
      <MoviesList movies={sortMoviesByPopularity(cast).slice(0, 10)} />
    </div>
  );
};

export default PersonDetails;
