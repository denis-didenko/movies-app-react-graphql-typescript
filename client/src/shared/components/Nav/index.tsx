import { BiCameraMovie } from 'react-icons/bi';
import { MdHome, MdSearch, MdFavoriteBorder } from 'react-icons/md';
import { TbMovie } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => (
  <nav className='nav'>
    <ul>
      <li>
        <NavLink to='/'>
          <MdHome />
          <span>Головна</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/movies'>
          <TbMovie />
          <span>Фiльми</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/series'>
          <BiCameraMovie />
          <span>Серіали</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/search'>
          <MdSearch />
          <span>Пошук</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/favorites'>
          <MdFavoriteBorder />
          <span>Обране</span>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
