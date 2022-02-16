import React from 'react';
import PropTypes from 'prop-types';

import { buttons } from '@/constants';

import { KeyStyle } from './styles';

const Keypad = ({ setPress }) => {
  return (
    <section onClick={setPress}>
      {buttons.map((key, id) => (
        <KeyStyle key={id}>{key}</KeyStyle>
      ))}
    </section>
  );
};

Keypad.propTypes = {
  setPress: PropTypes.func.isRequired,
};

export { Keypad };
