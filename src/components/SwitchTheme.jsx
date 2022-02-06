import React from 'react';
import styled from 'styled-components';

const SubTitleStyle = styled.span`
  color: ${({ theme }) => theme.background.secondary};
  font-size: 14px;
`;

const SelectStyle = styled.select`
  padding: 10px;
  cursor: pointer;
  width: 100%;
`;

const SwitchTheme = () => {
  return (
    <div>
      <SubTitleStyle>Switch Theme</SubTitleStyle>
      <SelectStyle>
        <option value="light">Light theme</option>
        <option value="colored">Colored theme</option>
        <option value="dark">Dark theme</option>
      </SelectStyle>
    </div>
  );
};

export { SwitchTheme };
