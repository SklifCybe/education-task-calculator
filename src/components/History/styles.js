import PropTypes from 'prop-types';
import styled from 'styled-components';

const HistoryStyle = styled.section`
  width: 270px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

HistoryStyle.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export { HistoryStyle };
