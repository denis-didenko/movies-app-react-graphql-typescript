import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_UPCOMING_MOVIES, GET_NOW_PLAYING_MOVIES } from '../../graphql/queries';
import { IUpcomingMoviesQuery, INowPlayingMoviesQuery } from './types';
import HomeSlider from './components/HomeSlider';
import MoviesList from '../movies/components/MoviesList';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import './home.css';

const HomePage: FC = () => {
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

    return (
        <>
            <h2 className='page-title'>Upcoming movies</h2>
            <HomeSlider slides={upcomingData?.upcomingMovies.slice(0, 10)} />
            <h2>Now playing:</h2>
            <MoviesList movies={nowPlayingData?.nowPlayingMovies.slice(4, 16)} />
        </>
    );
};

export default HomePage;
