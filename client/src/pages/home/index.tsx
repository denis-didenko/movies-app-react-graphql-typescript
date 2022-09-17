import { useQuery } from '@apollo/client';

import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import MoviesList from '../../features/movies';
import { GET_UPCOMING_MOVIES, GET_NOW_PLAYING_MOVIES } from '../../features/movies/queries';
import { IUpcomingMoviesData, INowPlayingMoviesData } from '../../features/movies/types';
import HomeSlider from '../../features/slider/components/HomeSlider';
import { useApi } from '../../hooks/useApi';

import './home.css';

interface IHomeVariables {
  page: number;
}

const HomePage = () => {
  const { sortMoviesByReleaseDate } = useApi();

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
      <MoviesList movies={sortMoviesByReleaseDate(nowPlaying).slice(0, 20)} />
    </>
  );
};

export default HomePage;
