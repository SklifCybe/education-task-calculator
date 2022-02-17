import React from 'react';
import PropTypes from 'prop-types';

import { SelectStyle, SubTitleStyle } from './components';

const SwitchTheme = ({ theme, chooseTheme }) => {
  const selectTheme = (event) => {
    chooseTheme(event.target.value);
  };

  return (
    <div>
      <SubTitleStyle>Switch Theme</SubTitleStyle>
      <SelectStyle value={theme} onChange={selectTheme}>
        <option value="light">Light theme</option>
        <option value="colored">Colored theme</option>
        <option value="dark">Dark theme</option>
      </SelectStyle>
    </div>
  );
};

SwitchTheme.propTypes = {
  theme: PropTypes.string.isRequired,
  chooseTheme: PropTypes.func.isRequired,
};

export { SwitchTheme };
