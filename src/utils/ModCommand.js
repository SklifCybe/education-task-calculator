class ModCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute = (curValue) => curValue % this.valueToDivide;
}

export { ModCommand };
