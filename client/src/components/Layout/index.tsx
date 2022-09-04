import { Outlet } from 'react-router-dom';
import Nav from './navPane';

const Layout = () => (
  <div className='wrapper'>
    <main>
      <Outlet />
    </main>
    <Nav />
  </div>
);

export default Layout;
