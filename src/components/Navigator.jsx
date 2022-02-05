import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  const [page, setPage] = React.useState('home');

  const togglePage = (event) => {
    const newPage = event.target.textContent;

    if (newPage === 'Home') setPage('home');
    if (newPage === 'Settings') setPage('settings');
  };

  return (
    <nav>
      <ListStyle onClick={togglePage}>
        <ListItemStyle active={page === 'home'}>
          <Link to="/">Home</Link>
        </ListItemStyle>
        <ListItemStyle active={page === 'settings'}>
          <Link to="settings">Settings</Link>
        </ListItemStyle>
      </ListStyle>
    </nav>
  );
};

export { Navigator };
