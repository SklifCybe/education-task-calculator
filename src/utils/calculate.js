import { Calculator } from '@/utils/CalculatorStorage';

const smartCalculateLogic = (expression) => {
  const values = [];
  const operators = [];
  const calc = new Calculator();

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === ' ') {
      continue;
    } else if (expression[i] >= '0' && expression[i] <= '9') {
      let buffer = '';
      while (i < expression.length && expression[i] >= '0' && expression[i] <= '9') {
        buffer += expression[i++];
      }
      values.push(parseInt(buffer));
      i--;
    } else if (expression[i] === '(') {
      operators.push(expression[i]);
    } else if (expression[i] === ')') {
      while (operators[operators.length - 1] !== '(') {
        values.push(calc.execute(operators.pop(), values.pop(), values.pop()));
      }
      operators.pop();
    } else if (expression[i].match(/'+'||'-'||'*'||-'\/'||'%'/g)) {
      if (expression.match(/'*\*'||'.'/g)) {
        return new Function(`return ${expression}`)();
      }

      while (operators.length && hasPrecedence(expression[i], operators[operators.length - 1])) {
        values.push(calc.execute(operators.pop(), values.pop(), values.pop()));
      }
      operators.push(expression[i]);
    }
  }

  while (operators.length) {
    values.push(calc.execute(operators.pop(), values.pop(), values.pop()));
  }

  return values.pop();
};

const hasPrecedence = (firstOperator, secondOperator) => {
  if (secondOperator === '(' || secondOperator === ')') {
    return false;
  }
  if (
    (firstOperator === '*' || firstOperator === '/') &&
    (secondOperator === '+' || secondOperator === '-')
  ) {
    return false;
  }
  return true;
};

const calculate = (expression) => {
  return smartCalculateLogic(expression);
};

export { calculate };
