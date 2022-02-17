import React from 'react';
import PropTypes from 'prop-types';

import { buttons } from '@/constants';

import { KeyStyle, ButtonSection } from './components';

const Keypad = ({ setPress }) => {
  return (
    <ButtonSection onClick={setPress}>
      {buttons.map((key, id) => (
        <KeyStyle key={id}>{key}</KeyStyle>
      ))}
    </ButtonSection>
  );
};

Keypad.propTypes = {
  setPress: PropTypes.func.isRequired,
};

export { Keypad };
