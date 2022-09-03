import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useApi } from '../../../hooks/useApi';
import { GET_SERIES } from '../queries';
import { ISeries } from '../types';
import SeriesList from './SeriesList';
import AddToFavouriteBtn from '../../favorites/components/AddToFavouriteBtn';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Casts from '../../movies/components/Casts';
import Seasons from './Seasons';

interface ISeriesData {
    series: ISeries;
}

const SeriesDetails = () => {
    const { id } = useParams();
    const { getFullImgPath, getUniqueCrewAggregate, sortSeriesByRating } = useApi();
    const { loading, error, data } = useQuery<ISeriesData>(GET_SERIES, {
        variables: { id },
    });

    if (loading) return <Loading />;
    if (error) return <ErrorMessage error={error} />;
    if (!data) return null;

    const {
        name,
        backdrop_path,
        vote_average,
        first_air_date,
        genres,
        overview,
        credits,
        recommendations,
        videos,
        seasons,
        number_of_seasons,
        original_name,
        created_by,
        networks,
    } = data.series;

    const year = first_air_date.split('-')[0];
    const genresList = genres.map(({ name }) => name);
    const networksList = networks.map(({ name }) => name);

    const actors = credits.cast.filter(cast => cast.known_for_department === 'Acting');
    const directors = credits.crew.filter(crew => crew.jobs.find(({ job }) => job === 'Director'));
    const producers = credits.crew.filter(crew => crew.jobs.find(({ job }) => job.includes('Producer')));
    const writers = credits.crew.filter(crew => crew.jobs.find(({ job }) => job.includes('Writer')));
    const soundEditors = credits.crew.filter(crew => crew.jobs.find(({ job }) => job.includes('Music')));

    const trailerHash = videos.find(video => video.type === 'Trailer')?.key;
    const teaserHash = videos.find(video => video.type === 'Teaser')?.key;

    return (
        <div className='movie-details'>
            <div className='movie-details__poster'>
                <LazyLoadImage width={'100%'} height={'auto'} alt={name} src={getFullImgPath(backdrop_path)} effect='blur' />
            </div>

            <h1 className='movie-details__name'>
                {name} <span className='movie-details__original_name'>({original_name})</span>
            </h1>
            <p className='movie-details__rating'>TMDB: {vote_average.toFixed(1)}</p>
            <p className='movie-details__release-date'>
                {`${year} · ${networksList.join(', ')} · ${number_of_seasons} сезонiв · ${genresList.join(', ')}`}
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

                <AddToFavouriteBtn item={data.series} />
            </div>

            <p className='movie-overview'>{overview}</p>

            <Tabs>
                <TabList>
                    <Tab>Актори</Tab>
                    <Tab>Автори</Tab>
                    <Tab>Режисери</Tab>
                    <Tab>Продюсери</Tab>
                    <Tab>Сценаристи</Tab>
                    <Tab>Звукорежисери</Tab>
                </TabList>

                <TabPanel>
                    <Casts casts={actors.slice(0, 10)} />
                </TabPanel>
                <TabPanel>
                    <Casts casts={created_by} />
                </TabPanel>
                <TabPanel>
                    <Casts casts={getUniqueCrewAggregate(directors)} />
                </TabPanel>
                <TabPanel>
                    <Casts casts={getUniqueCrewAggregate(producers)} />
                </TabPanel>
                <TabPanel>
                    <Casts casts={getUniqueCrewAggregate(writers)} />
                </TabPanel>
                <TabPanel>
                    <Casts casts={getUniqueCrewAggregate(soundEditors)} />
                </TabPanel>
            </Tabs>

            <Seasons seasons={seasons} />

            <h2>Рекомендацii:</h2>
            <SeriesList series={sortSeriesByRating(recommendations).slice(0, 10)} />
        </div>
    );
};

export default SeriesDetails;
