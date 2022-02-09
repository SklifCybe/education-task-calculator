import React from 'react';

import { lightTheme } from '../styles/themes/light-theme';
import { coloredTheme } from '../styles/themes/colored-theme';
import { darkTheme } from '../styles/themes/dark-theme';

const keyOfLocalStorage = 'theme';

const useTheme = (defaultTheme = 'light') => {
  const [theme, setTheme] = React.useState(defaultTheme);

  const getCurrentTheme = () => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'colored':
        return coloredTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  const chooseTheme = (selectedTheme) => {
    localStorage.setItem(keyOfLocalStorage, selectedTheme);
    setTheme(selectedTheme);
  };

  React.useEffect(() => {
    const localTheme = localStorage.getItem(keyOfLocalStorage);

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return { theme, getCurrentTheme, chooseTheme };
};

export { useTheme };
