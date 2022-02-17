import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListStyle = styled.ul`
  display: flex;
  gap: 1rem;
`;

const ListItemStyle = styled.li`
  cursor: pointer;
  padding-bottom: 3px;
  border-bottom: 1px solid ${({ theme, active }) => !active && theme.background.secondary};
  color: ${({ theme, active }) => !active && theme.color.disabled};
`;

ListStyle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

ListItemStyle.propTypes = {
  active: PropTypes.bool.isRequired,
};

export { ListStyle, ListItemStyle };
