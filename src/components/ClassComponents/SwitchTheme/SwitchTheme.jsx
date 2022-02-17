import React from 'react';
import PropTypes from 'prop-types';

import { SelectStyle, SubTitleStyle } from './components';

class SwitchTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  selectTheme = (event) => {
    this.props.chooseTheme(event.target.value);
  };

  render() {
    const theme = this.props.theme;

    return (
      <div>
        <SubTitleStyle>Switch Theme</SubTitleStyle>
        <SelectStyle value={theme} onChange={this.selectTheme}>
          <option value="light">Light theme</option>
          <option value="colored">Colored theme</option>
          <option value="dark">Dark theme</option>
        </SelectStyle>
      </div>
    );
  }
}

SwitchTheme.propTypes = {
  theme: PropTypes.string.isRequired,
  chooseTheme: PropTypes.func.isRequired,
};

export { SwitchTheme };
