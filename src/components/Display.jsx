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
  return <DisplayStyle value={value} onChange={onChange} readOnly />;
};

export { Display };
