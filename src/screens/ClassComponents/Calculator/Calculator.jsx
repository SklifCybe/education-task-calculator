import React from 'react';
import PropTypes from 'prop-types';

import { evaluate as calc } from 'mathjs';

import { Display } from '@/components/ClassComponents/Display';
import { Keypad } from '@/components/ClassComponents/Keypad';
import { ControlPanel } from '@/components/ClassComponents/ControlPanel';
import { Flex } from '@/components/FunctionalComponents/Flex/components';

import { CalculatorStyle } from './components';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { expression: '', result: '' };
  }

  pressEqual = () => {
    this.setState((prevState) => {
      try {
        return {
          result: calc(prevState.expression).toString(),
        };
      } catch (err) {
        console.error(err.message);
        return {
          expression: '',
          result: '',
        };
      }
    });
  };

  pressClear = () => {
    this.setState((prevState) => {
      if (prevState.result) {
        return {
          expression: prevState.result.slice(0, prevState.result.length - 1),
        };
      }
      return {
        result: '',
        expression: prevState.expression.slice(0, prevState.expression.length - 1),
      };
    });
  };

  buttonHandler = (event) => {
    if (event.target.localName === 'button') {
      const buttonValue = event.target.textContent;

      switch (buttonValue) {
        case '=':
          this.pressEqual();
          break;
        case 'CE':
          this.setState({ expression: '', result: '' });
          break;
        case 'C':
          this.pressClear();
          break;
        default:
          this.setState((prevState) => ({
            result: '',
            expression: prevState.result
              ? prevState.result + buttonValue
              : prevState.expression + buttonValue,
          }));
          break;
      }
    }
  };

  componentDidUpdate() {
    const { expression, result } = this.state;
    if (result) {
      this.props.setHistory((prevHistory) => [...prevHistory, `${expression}=${result}`]);
    }
  }

  render() {
    const calculate = this.state;
    const history = this.props.history;

    return (
      <CalculatorStyle>
        <Flex gap="10px">
          <Flex direction="column" width="900px">
            <Display value={calculate} />
            <Keypad setPress={this.buttonHandler} />
          </Flex>
          <ControlPanel historyList={history} />
        </Flex>
      </CalculatorStyle>
    );
  }
}

Calculator.propTypes = {
  history: PropTypes.array.isRequired,
  setHistory: PropTypes.func.isRequired,
};

export { Calculator };
