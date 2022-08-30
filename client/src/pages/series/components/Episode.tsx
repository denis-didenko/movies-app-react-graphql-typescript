import { FC } from 'react';
import { IEpisode } from '../types';

interface IProps {
    episode: IEpisode;
}

const Episode: FC<IProps> = ({ episode }) => {
    const { name, overview, episode_number } = episode;

    return (
        <div className='episode'>
            <div className='episode-details'>
                <div className='episode-name'>
                    {episode_number}. {name}
                </div>
                <div className='episode-overview'>{overview}</div>
            </div>
        </div>
    );
};

export default Episode;
