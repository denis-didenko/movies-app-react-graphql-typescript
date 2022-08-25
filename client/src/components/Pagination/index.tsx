import { FC } from 'react';
import './pagination.css';

interface IPaginationProps {
    activePage: number;
    setActivePage: (active: number) => void;
}

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Pagination: FC<IPaginationProps> = ({ activePage, setActivePage }) => {
    return (
        <div className='pagination'>
            {pages.map(page => (
                <div key={page} className={`page-item${activePage === page ? ' is-active' : ''}`} onClick={() => setActivePage(page)}>
                    {page}
                </div>
            ))}
        </div>
    );
};

export default Pagination;
