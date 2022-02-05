import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {   
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    font-family: Arial, sans-serif;
  }

  a {
    color: inherit;
  }

  header {
    background: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.color.secondary};
  }

  body {
    background: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export { GlobalStyle };
