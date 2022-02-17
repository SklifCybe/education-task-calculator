import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
`;

Flex.propTypes = {
  direction: PropTypes.string,
  wrap: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  gap: PropTypes.string,
  width: PropTypes.string,
};

Flex.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  align: 'stretch',
  justify: 'flex-start',
  gap: '0px',
  width: 'auto',
};

export { Flex };
