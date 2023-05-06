import { FC } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { getImgUrl } from '@shared/api/tmdb';

import Episode from './Episode';
import { ISeason } from '../model/types';

interface IProps {
  seasons: ISeason[];
}

export const SeasonsTable: FC<IProps> = ({ seasons }) => {
  return (
    <div className='seasons-table'>
      <table width='100%'>
        <thead>
          <tr>
            <th>Сезон</th>
            <th>Епізоди</th>
          </tr>
        </thead>
        <tbody>
          {seasons.map(({ id, name, poster_path, episodes }) => (
            <tr key={id}>
              <td>
                <LazyLoadImage
                  width='100%'
                  height='auto'
                  alt={name}
                  src={getImgUrl(poster_path, true)}
                  effect='blur'
                />
                <div className='season-name'>{name}</div>
              </td>
              <td>
                <div className='episodes-list'>
                  {episodes.map(episode => (
                    <Episode key={episode.id} episode={episode} />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
