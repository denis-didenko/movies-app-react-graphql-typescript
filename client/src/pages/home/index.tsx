import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { GET_UPCOMING_MOVIES } from '../../graphql/queries';
import { UpcomingMoviesQuery } from './types';
import HomeSlider from './components/HomeSlider';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

const HomePage: FC = () => {
    const { loading, error, data } = useQuery<UpcomingMoviesQuery>(GET_UPCOMING_MOVIES);
    console.log('data: ', data);

    if (loading || !data) return <Loading />;
    if (error) return <ErrorMessage error={error} />;

    return (
        <>
            <HomeSlider slides={data.upcomingMovies} />
        </>
    );
};

export default HomePage;
