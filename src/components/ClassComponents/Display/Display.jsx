import React from 'react';
import PropTypes from 'prop-types';

import { DisplayStyle } from './components';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { result, expression } = this.props.value;

    if (result) {
      return <DisplayStyle value={value.result} readOnly />;
    }

    return <DisplayStyle value={expression} readOnly />;
  }
}

Display.propTypes = {
  value: PropTypes.shape({
    expression: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  }),
};

export { Display };
