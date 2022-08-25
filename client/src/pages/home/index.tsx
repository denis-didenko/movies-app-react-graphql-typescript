import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_UPCOMING_MOVIES, GET_NOW_PLAYING_MOVIES } from '../../graphql/queries';
import { IUpcomingMoviesQuery, INowPlayingMoviesQuery } from './types';
import { useApi } from '../../hooks/useApi';
import HomeSlider from './components/HomeSlider';
import MoviesList from '../movies/components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import './home.css';

const HomePage: FC = () => {
    const { sortMoviesByReleaseDate } = useApi();

    const {
        loading: upcomingLoading,
        error: upcomingErrorMessage,
        data: upcomingData,
    } = useQuery<IUpcomingMoviesQuery>(GET_UPCOMING_MOVIES);

    const {
        loading: nowPlayingLoading,
        error: nowPlayingErrorMessage,
        data: nowPlayingData,
    } = useQuery<INowPlayingMoviesQuery>(GET_NOW_PLAYING_MOVIES);

    if (upcomingLoading || nowPlayingLoading) return <Loading />;
    if (upcomingErrorMessage) return <ErrorMessage error={upcomingErrorMessage} />;
    if (nowPlayingErrorMessage) return <ErrorMessage error={nowPlayingErrorMessage} />;
    if (!upcomingData || !nowPlayingData) return null;

    return (
        <>
            <h2 className='page-title'>Незабаром:</h2>
            <HomeSlider slides={sortMoviesByReleaseDate(upcomingData.upcomingMovies).slice(0, 10)} />
            <h2>Дивляться зараз:</h2>
            <MoviesList movies={sortMoviesByReleaseDate(nowPlayingData.nowPlayingMovies).slice(4, 16)} />
        </>
    );
};

export default HomePage;
