import { FC } from 'react';

import './pagination.css';

interface IPaginationProps {
  total: number | undefined;
  activePage: number;
  setActivePage: (active: number) => void;
}

const preparePages = (total: number, activePage: number) => {
  let pages = Array.from({ length: total }, (v, k) => k + 1);

  if (pages.length > 10) {
    pages = pages.filter((page, index) => {
      // always visible last 2 pages
      if (index >= total - 2) {
        return true;
      }

      // visible 10 pages if active page greater than 5
      if (activePage > 5) {
        return index >= activePage - 3 && index <= activePage + 2;
      }

      return index <= 6;
    });
  }

  return pages;
};

const Pagination: FC<IPaginationProps> = ({ total, activePage, setActivePage }) => {
  if (!total) return null;

  const pages = preparePages(total, activePage);

  return (
    <div className='pagination'>
      {pages.map(page => (
        <div
          key={page}
          className={`page-item${activePage === page ? ' is-active' : ''}`}
          onClick={() => setActivePage(page)}
          onKeyDown={() => setActivePage(page)}
          role='button'
          tabIndex={0}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
