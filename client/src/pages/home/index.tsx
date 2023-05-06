import { useQuery } from '@apollo/client';
import {
  MovieList,
  GET_UPCOMING_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  IUpcomingMoviesData,
  INowPlayingMoviesData,
} from '@entities/movies';
import { sortMoviesByReleaseDate } from '@shared/api/tmdb';
import ErrorMessage from '@shared/components/ErrorMessage';
import Loading from '@shared/components/Loading';
import { HomeSlider } from '@widgets/home-slider';

import './home.css';

interface IHomeVariables {
  page: number;
}

const HomePage = () => {
  const {
    loading: upcomingLoading,
    error: upcomingErrorMessage,
    data: upcomingData,
  } = useQuery<IUpcomingMoviesData, IHomeVariables>(GET_UPCOMING_MOVIES, {
    variables: {
      page: 1,
    },
  });

  const {
    loading: nowPlayingLoading,
    error: nowPlayingErrorMessage,
    data: nowPlayingData,
  } = useQuery<INowPlayingMoviesData, IHomeVariables>(GET_NOW_PLAYING_MOVIES, {
    variables: {
      page: 1,
    },
  });

  if (upcomingLoading || nowPlayingLoading) return <Loading />;
  if (upcomingErrorMessage) return <ErrorMessage error={upcomingErrorMessage} />;
  if (nowPlayingErrorMessage) return <ErrorMessage error={nowPlayingErrorMessage} />;
  if (!upcomingData || !nowPlayingData) return null;

  const { results: upcoming } = upcomingData.upcomingMovies;
  const { results: nowPlaying } = nowPlayingData.nowPlayingMovies;

  return (
    <>
      <h2 className='page-title'>Незабаром:</h2>
      <HomeSlider slides={sortMoviesByReleaseDate(upcoming).slice(0, 10)} />
      <h2>Дивляться зараз:</h2>
      <MovieList movies={sortMoviesByReleaseDate(nowPlaying).slice(0, 20)} />
    </>
  );
};

export default HomePage;
