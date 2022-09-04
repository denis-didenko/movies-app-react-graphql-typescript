import { useQuery } from '@apollo/client';
import { GET_UPCOMING_MOVIES, GET_NOW_PLAYING_MOVIES } from './queries';
import { IUpcomingMoviesData, INowPlayingMoviesData } from './types';
import { useApi } from '../../hooks/useApi';
import HomeSlider from './components/HomeSlider';
import MoviesList from '../movies/components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import './home.css';

const HomePage = () => {
  const { sortMoviesByReleaseDate } = useApi();

  const {
    loading: upcomingLoading,
    error: upcomingErrorMessage,
    data: upcomingData,
  } = useQuery<IUpcomingMoviesData>(GET_UPCOMING_MOVIES, {
    variables: {
      page: 1,
    },
  });

  const {
    loading: nowPlayingLoading,
    error: nowPlayingErrorMessage,
    data: nowPlayingData,
  } = useQuery<INowPlayingMoviesData>(GET_NOW_PLAYING_MOVIES, {
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
