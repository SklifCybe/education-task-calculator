import React from 'react';
import styled from 'styled-components';

const NavigatorStyle = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
  }
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
    <NavigatorStyle>
      <ul onClick={togglePage}>
        <ListItemStyle active={page === 'home'}>Home</ListItemStyle>
        <ListItemStyle active={page === 'settings'}>Settings</ListItemStyle>
      </ul>
    </NavigatorStyle>
  );
};

export { Navigator };
