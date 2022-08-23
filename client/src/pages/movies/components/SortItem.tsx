import { FC, useState, MouseEvent } from 'react';
import { MdOutlineSouth, MdOutlineNorth } from 'react-icons/md';

interface IProps {
    sort: string;
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    sortAscending: boolean;
    setSortAscending: (sortAscending: boolean) => void;
}

const SortItem: FC<IProps> = ({ sort, sortBy, setSortBy, sortAscending, setSortAscending }) => {
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
        <button key={sort} className={sortBy === sort ? 'sort-btn is-selected' : 'sort-btn'} data-sort={sort} onClick={changeSortByHandler}>
            <span>{sort}</span>
            {ascending ? <MdOutlineNorth /> : <MdOutlineSouth />}
        </button>
    );
};

export default SortItem;
