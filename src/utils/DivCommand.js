class DivCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute = (curValue) => curValue / this.valueToDivide;
}

export { DivCommand };
