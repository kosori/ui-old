import NavLink from './NavLink';

const MainNav = () => {
  return (
    <nav>
      <ul className='flex gap-x-6'>
        <NavLink href='/docs/getting-started'>Documentation</NavLink>
        <NavLink href='/docs/primitives/avatar'>Components</NavLink>
      </ul>
    </nav>
  );
};

export default MainNav;
