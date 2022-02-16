import styled from 'styled-components';
import PropTypes from 'prop-types';

const SubTitleStyle = styled.span`
  font-size: 14px;
`;

const SelectStyle = styled.select`
  padding: 10px;
  cursor: pointer;
  width: 100%;
`;

SelectStyle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { SubTitleStyle, SelectStyle };
