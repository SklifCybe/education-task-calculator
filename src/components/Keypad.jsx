import React from 'react';
import styled from 'styled-components';

const KeypadStyle = styled.section`
  display: flex;
  flex-wrap: wrap;

  button {
    font-size: 34px;
    cursor: pointer;
    height: 70px;
    width: 70px;
    border-radius: 10px;
    margin: 30px;
  }
`;

const Keypad = () => {
  return (
    <KeypadStyle>
      <button>C</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>*</button>
      <button>-</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>\</button>
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>=</button>
      <button>.</button>
      <button>(</button>
      <button>0</button>
      <button>)</button>
      <button>CE</button>
    </KeypadStyle>
  );
};

export { Keypad };
