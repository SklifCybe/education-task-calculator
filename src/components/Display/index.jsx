import React from 'react';
import PropTypes from 'prop-types';

import { DisplayStyle } from './styles';

const Display = ({ value }) => {
  if (value.result) {
    return <DisplayStyle value={value.result} readOnly />;
  }

  return <DisplayStyle value={value.expression} readOnly />;
};

Display.propTypes = {
  value: PropTypes.shape({
    expression: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  }),
};

export { Display };
