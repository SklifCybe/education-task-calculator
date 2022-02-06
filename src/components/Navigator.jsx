import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { PageContext } from '../utils/page-context';

const ListStyle = styled.ul`
  display: flex;
  gap: 1rem;
`;

const ListItemStyle = styled.li`
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: 1px solid ${({ theme, active }) => !active && theme.background.secondary};
  color: ${({ theme, active }) => !active && theme.color.disabled};
`;

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
