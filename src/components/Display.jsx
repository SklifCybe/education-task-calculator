import React from 'react';
import styled from 'styled-components';

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

const Display = ({ value, onChange }) => {
  if (value.result) {
    return <DisplayStyle value={value.result} onChange={onChange} readOnly />;
  }

  return <DisplayStyle value={value.expression} onChange={onChange} readOnly />;
};

export { Display };
