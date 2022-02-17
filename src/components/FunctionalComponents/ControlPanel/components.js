import PropTypes from 'prop-types';
import styled from 'styled-components';

const ControlPanelStyle = styled.aside`
  text-align: center;
  width: 300px;
  max-height: 450px;
  overflow: auto;
  border-left: ${({ theme }) => `2px solid ${theme.color.disabled}`};
  overflow: ${({ visible }) => (visible ? 'auto' : 'hidden')};
`;

const ButtonStyle = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

ControlPanelStyle.propTypes = {
  visible: PropTypes.bool.isRequired,
};

ButtonStyle.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { ControlPanelStyle, ButtonStyle };
