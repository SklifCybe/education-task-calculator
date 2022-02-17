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

DisplayStyle.propTypes = {
  value: PropTypes.string.isRequired,
};

export { DisplayStyle };
