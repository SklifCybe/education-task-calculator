import React from 'react';
import styled from 'styled-components';

import { keys } from '../constants';

const KeyStyle = styled.button`
  font-size: 34px;
  cursor: pointer;
  height: 70px;
  width: 70px;
  border-radius: 10px;
  margin: 10px 50px;
`;

const Keypad = ({ setPress }) => {
  return (
    <div onClick={setPress}>
      {keys.map((key, id) => (
        <KeyStyle key={id}>{key}</KeyStyle>
      ))}
    </div>
  );
};

export { Keypad };
