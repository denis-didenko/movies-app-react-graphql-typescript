import { Outlet } from 'react-router-dom';

import Nav from '../components/Nav';

const Layout = () => (
  <div className='wrapper'>
    <main>
      <Outlet />
    </main>
    <Nav />
  </div>
);

export default Layout;
