import { MdOutlinePlayCircleOutline } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useQuery } from '@apollo/client';
import { Casts } from '@entities/credits';
import { SeriesList, Seasons, GET_SERIES, ISeries } from '@entities/series';
import { AddToFavoriteBtn } from '@features/favorites';
import { getImgUrl, getUniqueCrewAggregate, sortSeriesByRating } from '@shared/api/tmdb';
import ErrorMessage from '@shared/components/ErrorMessage';
import Loading from '@shared/components/Loading';

import './series-details.css';

interface ISeriesData {
  series: ISeries;
}

interface ISeriesVariables {
  id: string;
}

const SeriesDetails = () => {
  const { id } = useParams() as { id: string };
  const { loading, error, data } = useQuery<ISeriesData, ISeriesVariables>(GET_SERIES, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return null;

  /* eslint-disable */
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
  /* eslint-enable */

  const year = first_air_date.split('-')[0];
  const genresList = genres.map(genre => genre.name);
  const networksList = networks.map(network => network.name);

  const actors = credits.cast.filter(cast => cast.known_for_department === 'Acting');
  const directors = credits.crew.filter(crew => crew.jobs.find(({ job }) => job === 'Director'));
  const producers = credits.crew.filter(crew =>
    crew.jobs.find(({ job }) => job.includes('Producer')),
  );
  const writers = credits.crew.filter(crew => crew.jobs.find(({ job }) => job.includes('Writer')));
  const soundEditors = credits.crew.filter(crew =>
    crew.jobs.find(({ job }) => job.includes('Music')),
  );

  const trailerHash = videos.find(video => video.type === 'Trailer')?.key;
  const teaserHash = videos.find(video => video.type === 'Teaser')?.key;

  return (
    <div className='movie-details'>
      <div className='movie-details__poster'>
        <LazyLoadImage
          width='100%'
          height='auto'
          alt={name}
          src={getImgUrl(backdrop_path)}
          effect='blur'
        />
      </div>

      <h1 className='movie-details__name'>
        {name}
        <span className='movie-details__original_name'>{original_name}</span>
      </h1>
      <p className='movie-details__rating'>
        TMDB:
        {vote_average.toFixed(1)}
      </p>
      <p className='movie-details__release-date'>
        {`${year} · 
        ${networksList.join(', ')} · ${number_of_seasons} сезонiв · ${genresList.join(', ')}`}
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

        <AddToFavoriteBtn favoriteItem={data.series} />
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
