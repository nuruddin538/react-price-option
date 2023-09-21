import { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/products', name: 'Products' },
    { id: 4, path: '/contact', name: 'Contact' },
    { id: 5, path: '*', name: 'NotFound' },
  ];
  return (
    <nav>
      <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineMenu></AiOutlineMenu>
        ) : (
          <AiOutlineClose></AiOutlineClose>
        )}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? 'top-20' : '-top-40'
        } bg-orange-500 px-6 shadow-lg`}
      >
        {routes.map(route => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
