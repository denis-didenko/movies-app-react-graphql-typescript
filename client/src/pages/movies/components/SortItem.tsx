import { FC, useState, MouseEvent } from 'react';
import { MdOutlineSouth, MdOutlineNorth } from 'react-icons/md';

interface IProps {
    sort: string;
    sortType: string;
    setSortType: (sortType: string) => void;
    sortAscending: boolean;
    setSortAscending: (sortAscending: boolean) => void;
}

const SortItem: FC<IProps> = ({ sort, sortType, setSortType, sortAscending, setSortAscending }) => {
    const [ascending, setAscending] = useState(sortAscending);

    const changeSortTypeHandler = (event: MouseEvent<HTMLButtonElement>) => {
        const sort = event.currentTarget.dataset.sort!;

        if (sortType === sort) {
            setSortAscending(!sortAscending);
            setAscending(!ascending);
            return;
        }

        setSortType(sort);
    };

    return (
        <button
            key={sort}
            className={sortType === sort ? 'sort-btn is-selected' : 'sort-btn'}
            data-sort={sort}
            onClick={changeSortTypeHandler}
        >
            <span>{sort}</span>
            {ascending ? <MdOutlineNorth /> : <MdOutlineSouth />}
        </button>
    );
};

export default SortItem;
