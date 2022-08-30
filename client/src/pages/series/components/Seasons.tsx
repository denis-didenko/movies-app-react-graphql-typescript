import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useApi } from '../../../hooks/useApi';
import { ISeason } from '../types';
import Episode from './Episode';

interface IProps {
    seasons: ISeason[];
}

const SeasonsTable: FC<IProps> = ({ seasons }) => {
    const { getFullImgPath } = useApi();

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
                    {seasons.map(({ id, name, overview, poster_path, episodes }) =>
                        name === 'Спеціальне' ? null : (
                            <tr key={id}>
                                <td>
                                    <LazyLoadImage
                                        width={'100%'}
                                        height={'auto'}
                                        alt={name}
                                        src={getFullImgPath(poster_path)}
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
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SeasonsTable;
