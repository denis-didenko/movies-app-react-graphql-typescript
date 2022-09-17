import { useQuery } from '@apollo/client';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import Casts from '../../features/credits/components/Casts';
import AddToFavoriteBtn from '../../features/favorites/components/AddToFavoriteBtn';
import MoviesList from '../../features/movies';
import { GET_MOVIE } from '../../features/movies/queries';
import { IMovie } from '../../features/movies/types';
import { useApi } from '../../hooks/useApi';

import './movies-details.css';

interface IMovieData {
  movie: IMovie;
}

interface IMovieVariables {
  id: string;
}

const MovieDetails = () => {
  const { id } = useParams() as { id: string };
  const { getFullImgPath, getUniqueCrew, sortMoviesByReleaseDate } = useApi();
  const { loading, error, data } = useQuery<IMovieData, IMovieVariables>(GET_MOVIE, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return null;

  /* eslint-disable */
  const {
    title,
    original_title,
    backdrop_path,
    vote_average,
    release_date,
    runtime,
    genres,
    overview,
    credits,
    recommendations,
    videos,
  } = data.movie;
  /* eslint-enable */

  const releaseDateUA = new Intl.DateTimeFormat('uk-UA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(release_date));
  const genresList = genres.map(({ name }) => name);

  const actors = credits.cast.filter(cast => cast.known_for_department === 'Acting');
  const directors = credits.crew.filter(crew => crew.job === 'Director');
  const producers = credits.crew.filter(crew => crew.job === 'Producer');
  const writers = credits.crew.filter(crew => crew.department === 'Writing');
  const soundEditors = credits.crew.filter(crew => crew.job === 'Music Editor');

  const trailerHash = videos.find(video => video.type === 'Trailer')?.key;
  const teaserHash = videos.find(video => video.type === 'Teaser')?.key;

  return (
    <div className='movie-details'>
      <div className='movie-details__poster'>
        <LazyLoadImage
          width='100%'
          height='auto'
          alt={title}
          src={getFullImgPath(backdrop_path)}
          effect='blur'
        />
      </div>
      <h1 className='movie-details__title'>
        {title}
        <span className='movie-details__original_name'>{original_title}</span>
      </h1>
      <p className='movie-details__rating'>TMDB: {vote_average.toFixed(1)}</p>
      <p className='movie-details__release-date'>
        {' '}
        {`${releaseDateUA} · ${runtime} хв · ${genresList.join(', ')}`}{' '}
      </p>

      <div className='movie-details__videos'>
        {trailerHash ? (
          <a
            href={`https://www.youtube.com/watch?v=${trailerHash}`}
            className='movie-details__homepage btn'
            target='_blank'
            rel='noreferrer'
          >
            <MdOutlinePlayCircleOutline />
            <span>Трейлер</span>
          </a>
        ) : null}
        {teaserHash ? (
          <a
            href={`https://www.youtube.com/watch?v=${teaserHash}`}
            className='movie-details__homepage btn'
            target='_blank'
            rel='noreferrer'
          >
            <MdOutlinePlayCircleOutline />
            <span>Тизер</span>
          </a>
        ) : null}

        <AddToFavoriteBtn favoriteItem={data.movie} />
      </div>

      <p className='movie-overview'>{overview}</p>
      <Tabs>
        <TabList>
          <Tab>Актори</Tab>
          <Tab>Режисери</Tab>
          <Tab>Продюсери</Tab>
          <Tab>Сценаристи</Tab>
          <Tab>Звукорежисери</Tab>
        </TabList>

        <TabPanel>
          <Casts casts={actors.slice(0, 10)} />
        </TabPanel>
        <TabPanel>
          <Casts casts={getUniqueCrew(directors)} />
        </TabPanel>
        <TabPanel>
          <Casts casts={getUniqueCrew(producers)} />
        </TabPanel>
        <TabPanel>
          <Casts casts={getUniqueCrew(writers)} />
        </TabPanel>
        <TabPanel>
          <Casts casts={getUniqueCrew(soundEditors)} />
        </TabPanel>
      </Tabs>
      <h2>Рекомендацii:</h2>
      <MoviesList movies={sortMoviesByReleaseDate(recommendations).slice(0, 10)} />
    </div>
  );
};

export default MovieDetails;
