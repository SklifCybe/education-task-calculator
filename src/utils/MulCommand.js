class MulCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute = (curValue) => curValue * this.valueToMultiply;
}

export { MulCommand };
