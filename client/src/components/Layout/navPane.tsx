import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdSearch, MdStars } from 'react-icons/md';
import { BiCameraMovie } from 'react-icons/bi';
import { TbMovie } from 'react-icons/tb';

const Nav: FC = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/'>
                        <MdHome />
                        <span>Головна</span>
                    </Link>
                </li>
                <li>
                    <Link to='/movies'>
                        <TbMovie />
                        <span>Фiльми</span>
                    </Link>
                </li>
                <li>
                    <Link to='/series'>
                        <BiCameraMovie />
                        <span>Серіали</span>
                    </Link>
                </li>
                <li>
                    <Link to='/search'>
                        <MdSearch />
                        <span>Пошук</span>
                    </Link>
                </li>
                <li>
                    <Link to='/toprated'>
                        <MdStars />
                        <span>Top rated</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
