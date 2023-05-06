import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { MovieList } from '@entities/movies';
import { GET_PERSON, IPersonData, IPersonVariables } from '@entities/person';
import { getImgUrl, sortMoviesByReleaseDate, sortMoviesByPopularity } from '@shared/api/tmdb';
import ErrorMessage from '@shared/components/ErrorMessage';
import Loading from '@shared/components/Loading';

import './person.css';

const PersonDetails = () => {
  const { id } = useParams() as { id: string };
  const { loading, error, data } = useQuery<IPersonData, IPersonVariables>(GET_PERSON, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return null;

  const { name, birthday, biography, profile_path, place_of_birth, cast } = data.person;

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
          src={getImgUrl(profile_path)}
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
      <MovieList movies={sortMoviesByReleaseDate(cast).slice(0, 10)} />
      <h2>Популярні роботи:</h2>
      <MovieList movies={sortMoviesByPopularity(cast).slice(0, 10)} />
    </div>
  );
};

export default PersonDetails;
