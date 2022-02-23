const calculate = (expression) => {
  const values = [];
  const operators = [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === ' ') {
      continue;
    }

    if (expression[i] >= '0' && expression[i] <= '9') {
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
        values.push(applyOp(operators.pop(), values.pop(), values.pop()));
      }
      operators.pop();
    } else if (expression[i].match(/'+'||'-'||'*'||-'\/'||'%'/g)) {
      if (expression.match(/'*\*'||'.'/g)) {
        return new Function(`return ${expression}`)();
      }

      while (operators.length && hasPrecedence(expression[i], operators[operators.length - 1])) {
        values.push(applyOp(operators.pop(), values.pop(), values.pop()));
      }
      operators.push(expression[i]);
    }
  }

  while (operators.length) {
    values.push(applyOp(operators.pop(), values.pop(), values.pop()));
  }

  return values.pop();
};

const hasPrecedence = (op1, op2) => {
  if (op2 === '(' || op2 === ')') {
    return false;
  }
  if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
    return false;
  }
  return true;
};

const applyOp = (op, b, a) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return 'Cannot divide by zero';
      }
      return Math.floor(a / b);
    case '%':
      return a % b;
    case '**':
      return a ** b;
    default:
      return '';
  }
};

export { calculate };
