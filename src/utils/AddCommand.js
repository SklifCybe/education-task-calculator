class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute = (curValue) => curValue + this.valueToAdd;
}

export { AddCommand };
