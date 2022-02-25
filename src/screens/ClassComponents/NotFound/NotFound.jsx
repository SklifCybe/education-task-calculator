import React from 'react';
import { Link } from 'react-router-dom';

import { PageContext } from '@/context/page-context';
import { Button } from '@/components/FunctionalComponents/Button/components';

import { NotFoundStyle } from './components';

const ButtonGoHome = () => {
  return (
    <Button padding="5px" width="100%">
      Go Home
    </Button>
  );
};

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = PageContext;

  handleClick = () => {
    this.context.setPage('home');
  };

  render() {
    const error = this.props.error;

    return (
      <NotFoundStyle>
        <h2>Not found page</h2>
        {error ? (
          <a href="/" onClick={this.handleClick}>
            <ButtonGoHome />
          </a>
        ) : (
          <Link to="/" onClick={this.handleClick}>
            <ButtonGoHome />
          </Link>
        )}
      </NotFoundStyle>
    );
  }
}

export { NotFound };
