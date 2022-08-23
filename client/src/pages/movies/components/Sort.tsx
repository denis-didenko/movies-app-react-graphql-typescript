import { FC, useState, MouseEvent } from 'react';
import { MdOutlineSouth, MdOutlineNorth } from 'react-icons/md';

export const SORT_TYPES = ['popularity', 'release_date', 'original_title', 'vote_average'];

interface IProps {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    sortAscending: boolean;
    setSortAscending: (sortAscending: boolean) => void;
}

const Sort: FC<IProps> = ({ sortBy, setSortBy, sortAscending, setSortAscending }) => {
    const [ascending, setAscending] = useState(sortAscending);

    const changeSortByHandler = (event: MouseEvent<HTMLButtonElement>) => {
        const sort = event.currentTarget.dataset.sort!;

        if (sortBy === sort) {
            setSortAscending(!sortAscending);
            setAscending(!ascending);
            return;
        }

        setSortBy(sort);
    };

    return (
        <div className='sort-nav'>
            {SORT_TYPES.map(sort => (
                <button
                    key={sort}
                    className={sortBy === sort ? 'sort-btn is-selected' : 'sort-btn'}
                    data-sort={sort}
                    onClick={changeSortByHandler}
                >
                    <span>{sort}</span>
                    {ascending ? <MdOutlineNorth /> : <MdOutlineSouth />}
                </button>
            ))}
        </div>
    );
};

export default Sort;
