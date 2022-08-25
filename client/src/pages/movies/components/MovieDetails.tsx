import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GET_MOVIE } from '../../../graphql/queries';
import { IMovieData } from '../types';
import MoviesList from './MoviesList';
import Casts from './Casts';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import { useApi } from '../../../hooks/useApi';
import { MdOutlinePlayCircleOutline, MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const MovieDetails: FC = () => {
    const { id } = useParams();
    const { getFullImgPath, getUniqueCrew, sortMoviesByReleaseDate } = useApi();
    const { loading, error, data } = useQuery<IMovieData>(GET_MOVIE, {
        variables: { id },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (!data) return null;
    console.log('data: ', data);

    const { title, backdrop_path, vote_average, release_date, runtime, genres, overview, credits, recommendations, videos } = data.movie;

    const year = release_date.split('-')[0];
    const genresList = genres.map(({ name }) => name);

    const actors = credits.cast.filter(cast => cast.known_for_department === 'Acting');
    const directors = credits.crew.filter(crew => crew.job === 'Director');
    const producers = credits.crew.filter(crew => crew.job === 'Producer');
    const writers = credits.crew.filter(crew => crew.department === 'Writing');
    const soundEditors = credits.crew.filter(crew => crew.job === 'Music Editor');

    const videoHash = videos.find(video => video.type === 'Trailer')?.key;

    return (
        <div className='movie-details'>
            <div className='movie-details__poster'>
                <LazyLoadImage width={'100%'} height={'auto'} alt={title} src={getFullImgPath(backdrop_path)} effect='blur' />
            </div>
            <h1 className='movie-details__title'>{title}</h1>
            <p className='movie-details__rating'>TMDB: {vote_average.toFixed(1)}</p>
            <p className='movie-details__release-date'> {`${year} · ${runtime} хв · ${genresList.join(', ')}`} </p>

            {videoHash ? (
                <>
                    <a
                        href={`https://www.youtube.com/watch?v=${videoHash}`}
                        className='movie-details__homepage btn'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <MdOutlinePlayCircleOutline />
                        <span>Трейлер</span>
                    </a>
                    <button className='add-to-watchlist-btn'>
                        <MdFavoriteBorder />
                        <span>Додати до Улюбленного</span>
                    </button>
                </>
            ) : null}

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
