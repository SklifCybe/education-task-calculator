class PowCommand {
  constructor(valueToPow) {
    this.valueToPow = valueToPow;
  }

  execute = (curValue) => curValue ** this.valueToPow;
}

export { PowCommand };
