import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { buttons } from '../constants';

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
      {buttons.map((key, id) => (
        <KeyStyle key={id}>{key}</KeyStyle>
      ))}
    </div>
  );
};

Keypad.propTypes = {
  setPress: PropTypes.func.isRequired,
};

export { Keypad };
