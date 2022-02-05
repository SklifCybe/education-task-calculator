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
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, active }) => !active && theme.background.secondary};
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
  }, [page]);

  return (
    <nav>
      <ListStyle onClick={togglePage}>
        <ListItemStyle active={page === '/'}>
          <Link to="/">Home</Link>
        </ListItemStyle>
        <ListItemStyle active={page === '/settings'}>
          <Link to="settings">Settings</Link>
        </ListItemStyle>
      </ListStyle>
    </nav>
  );
};

export { Navigator };
