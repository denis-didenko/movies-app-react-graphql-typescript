import { FC } from 'react';

import { IEpisode } from '../types';

interface IProps {
  episode: IEpisode;
}

const Episode: FC<IProps> = ({ episode }) => {
  const { name, overview, episode_number, videos } = episode; // eslint-disable-line

  return (
    <div className='episode'>
      <div className='episode-details'>
        {videos.length > 0 ? (
          <div className='episode-name'>
            <span>{episode_number}. </span>
            <a
              href={`https://www.youtube.com/watch?v=${videos[0].key}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {name}
            </a>
          </div>
        ) : (
          <div className='episode-name'>
            {episode_number}. {name}
          </div>
        )}

        <div className='episode-overview'>{overview}</div>
      </div>
    </div>
  );
};

export default Episode;
