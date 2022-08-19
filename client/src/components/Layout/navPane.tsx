import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdSearch, MdCategory, MdCalendarToday, MdStars } from 'react-icons/md';

const Nav: FC = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/'>
                        <MdHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to='/search'>
                        <MdSearch />
                        <span>Search</span>
                    </Link>
                </li>
                <li>
                    <Link to='/categories'>
                        <MdCategory />
                        <span>Categories</span>
                    </Link>
                </li>
                <li>
                    <Link to='/toprated'>
                        <MdStars />
                        <span>Top rated</span>
                    </Link>
                </li>
                <li>
                    <Link to='/latest'>
                        <MdCalendarToday />
                        <span>Latest</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
