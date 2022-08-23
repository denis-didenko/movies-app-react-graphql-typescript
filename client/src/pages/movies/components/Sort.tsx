import { FC } from 'react';
import { SORT_TYPES } from '../model';
import SortItem from './SortItem';

interface IProps {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    sortAscending: boolean;
    setSortAscending: (sortAscending: boolean) => void;
}

const Sort: FC<IProps> = ({ sortBy, setSortBy, sortAscending, setSortAscending }) => {
    return (
        <div className='sort-nav'>
            {SORT_TYPES.map(sort => (
                <SortItem
                    key={sort}
                    sort={sort}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    sortAscending={sortAscending}
                    setSortAscending={setSortAscending}
                />
            ))}
        </div>
    );
};

export default Sort;
