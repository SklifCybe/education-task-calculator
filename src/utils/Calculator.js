import { Commands } from '@/utils/Commands';

class Calculator {
  execute = (command, prevValue, toValue) => {
    this.value = new Commands(command, prevValue, toValue).execute();
  };
}

export { Calculator };
