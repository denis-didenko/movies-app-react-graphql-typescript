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
import { useApiImg } from '../../../hooks/useApiImg';
import { MdOutlinePlayCircleOutline, MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const MovieDetails: FC = () => {
    const { id } = useParams();
    const { getFullImgPath } = useApiImg();
    const { loading, error, data } = useQuery<IMovieData>(GET_MOVIE, {
        variables: { id },
    });
    console.log('data: ', data?.movie);
    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (!data) return null;

    const { title, backdrop_path, vote_average, release_date, runtime, genres, homepage, overview, casts, recommendations } = data.movie;
    const year = release_date.split('-')[0];
    const genresList = genres.map(({ name }) => name);
    const actors = casts.filter(cast => cast.known_for_department === 'Acting');
    const directors = casts.filter(cast => cast.known_for_department === 'Directing');

    return (
        <div className='movie-details'>
            <div className='movie-details__poster'>
                <LazyLoadImage width={'100%'} height={'auto'} alt={title} src={getFullImgPath(backdrop_path)} effect='blur' />
            </div>
            <h1 className='movie-details__title'>{title}</h1>
            <p className='movie-details__rating'>TMDB: {vote_average.toFixed(1)}</p>
            <p className='movie-details__release-date'> {`${year} · ${runtime} mins · ${genresList.join(', ')}`} </p>
            <a href={homepage} className='movie-details__homepage btn' target='_blank' rel='noreferrer'>
                <MdOutlinePlayCircleOutline />
                <span>Watch now</span>
            </a>
            <button className='add-to-watchlist-btn'>
                <MdFavoriteBorder />
                <span>Add to watchlist</span>
            </button>
            <p className='movie-overview'>{overview}</p>
            <Tabs>
                <TabList>
                    <Tab>Actor</Tab>
                    <Tab>Director</Tab>
                </TabList>

                <TabPanel>
                    <Casts casts={actors} />
                </TabPanel>
                <TabPanel>
                    <Casts casts={directors} />
                </TabPanel>
            </Tabs>
            <h2>Recommendations:</h2>
            <MoviesList movies={recommendations.slice(0, 5)} />
        </div>
    );
};

export default MovieDetails;
