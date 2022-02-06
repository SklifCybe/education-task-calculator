import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'}
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  gap: ${(props) => props.gap || '0px'};
  width: ${(props) => props.width || 'auto'};
`;

export { Flex };
