import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { PageContext } from '@/utils/page-context';

import { ListStyle, ListItemStyle } from './styles';

const Navigator = () => {
  const { page, setPage } = React.useContext(PageContext);
  const location = useLocation();

  const togglePage = (event) => {
    const newPage = event.target.textContent;

    if (newPage === 'Home') setPage('/');
    if (newPage === 'Settings') setPage('/settings');
  };

  React.useEffect(() => {
    setPage(location.pathname);
  }, [setPage, location]);

  return (
    <nav>
      <ListStyle onClick={togglePage}>
        <Link to="/">
          <ListItemStyle active={page === '/'}>Home</ListItemStyle>
        </Link>
        <Link to="settings">
          <ListItemStyle active={page === '/settings'}>Settings</ListItemStyle>
        </Link>
      </ListStyle>
    </nav>
  );
};

export { Navigator };
