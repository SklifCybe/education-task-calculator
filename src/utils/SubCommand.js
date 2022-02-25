class SubCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute = (curValue) => curValue - this.valueToSubtract;
}

export { SubCommand };
