import React from 'react';
import { Link } from 'react-router-dom';

import { PageContext } from '@/utils/page-context';
import { withRouter } from './withRouter';

import { ListStyle, ListItemStyle } from './components';

class NavigatorClass extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = PageContext;

  togglePage = (event) => {
    const newPage = event.target.textContent;

    if (newPage === 'Home') this.context.setPage('/');
    if (newPage === 'Settings') this.context.setPage('/settings');
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const location = this.props.location;
    this.context.setPage(location.pathname);
  }

  render() {
    return (
      <nav>
        <ListStyle onClick={this.togglePage}>
          <Link to="/">
            <ListItemStyle active={page === '/'}>Home</ListItemStyle>
          </Link>
          <Link to="settings">
            <ListItemStyle active={page === '/settings'}>Settings</ListItemStyle>
          </Link>
        </ListStyle>
      </nav>
    );
  }
}

export const Navigator = withRouter(NavigatorClass);

export { Navigator };
