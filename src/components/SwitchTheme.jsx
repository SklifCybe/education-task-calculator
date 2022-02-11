import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubTitleStyle = styled.span`
  font-size: 14px;
`;

const SelectStyle = styled.select`
  padding: 10px;
  cursor: pointer;
  width: 100%;
`;

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

SelectStyle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { SwitchTheme };
