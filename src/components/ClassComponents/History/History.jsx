import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@/components/FunctionalComponents/Flex/components';

import { HistoryStyle } from './components';

class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { historyList, visible } = this.props;

    return (
      <HistoryStyle visible={visible} className="history">
        <Flex direction="column" gap="10px">
          <p>History</p>
          <ul className="history-list">
            {historyList && historyList.map((historyEl, id) => <li key={id}>{historyEl}</li>)}
          </ul>
        </Flex>
      </HistoryStyle>
    );
  }
}

History.propTypes = {
  historyList: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
};

export { History };
