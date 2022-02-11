import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

Button.propTypes = {
  padding: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

Button.defaultProps = {
  padding: '0px',
  height: 'auto',
  width: 'auto',
};

export { Button };
