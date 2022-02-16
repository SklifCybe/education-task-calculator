import React from 'react';

import { lightTheme } from '@/styles/themes/light-theme';
import { coloredTheme } from '@/styles/themes/colored-theme';
import { darkTheme } from '@/styles/themes/dark-theme';

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
    setTheme(selectedTheme);
  };

  return { theme, getCurrentTheme, chooseTheme };
};

export { useTheme };
