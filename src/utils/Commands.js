import { AddCommand } from '@/utils/AddCommand';
import { SubCommand } from '@/utils/SubCommand';
import { MulCommand } from '@/utils/MulCommand';
import { DivCommand } from '@/utils/DivCommand';
import { ModCommand } from '@/utils/ModCommand';
import { PowCommand } from '@/utils/PowCommand';

class Commands {
  constructor(operation, firstValue, secondValue) {
    this.addCommand = new AddCommand(firstValue);
    switch (operation) {
      case '+': {
        this.multiplyCommand = new AddCommand(secondValue);
        break;
      }
      case '-': {
        this.multiplyCommand = new SubCommand(secondValue);
        break;
      }
      case '*': {
        this.multiplyCommand = new MulCommand(secondValue);
        break;
      }
      case '/': {
        this.multiplyCommand = new DivCommand(secondValue);
        break;
      }
      case '**': {
        this.multiplyCommand = new PowCommand(secondValue);
        break;
      }
      case '%': {
        this.multiplyCommand = new ModCommand(secondValue);
        break;
      }
    }
  }
  execute = () => {
    return this.multiplyCommand.execute(this.addCommand.valueToAdd);
  };
}

export { Commands };
