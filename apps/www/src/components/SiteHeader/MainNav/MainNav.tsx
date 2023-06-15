import NavLink from './NavLink';

const MainNav = () => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-x-6'>
        <NavLink href='/docs/introduction'>Documentation</NavLink>
        <NavLink href='/docs/components'>Components</NavLink>
        <NavLink href='/docs/examples'>Examples</NavLink>
      </ul>
    </nav>
  );
};

export default MainNav;
