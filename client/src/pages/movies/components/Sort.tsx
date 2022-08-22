import { FC } from 'react';
import { SORT_TYPES } from '../model';
import SortItem from './SortItem';

interface IProps {
    sortType: string;
    setSortType: (sortType: string) => void;
    sortAscending: boolean;
    setSortAscending: (sortAscending: boolean) => void;
}

const Sort: FC<IProps> = ({ sortType, setSortType, sortAscending, setSortAscending }) => {
    return (
        <div className='sort-nav'>
            {SORT_TYPES.map(sort => (
                <SortItem
                    key={sort}
                    sort={sort}
                    sortType={sortType}
                    setSortType={setSortType}
                    sortAscending={sortAscending}
                    setSortAscending={setSortAscending}
                />
            ))}
        </div>
    );
};

export default Sort;
