import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  padding: ${({ padding }) => padding || '0px'};
`;

export { Button };
