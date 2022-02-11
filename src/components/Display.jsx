import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DisplayStyle = styled.input.attrs({
  type: 'text',
})`
  height: 5rem;
  min-width: 120px;
  font-size: 34px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid ${({ theme }) => theme.color.disabled};
  text-align: right;
`;

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

DisplayStyle.propTypes = {
  value: PropTypes.string.isRequired,
};

export { Display };
