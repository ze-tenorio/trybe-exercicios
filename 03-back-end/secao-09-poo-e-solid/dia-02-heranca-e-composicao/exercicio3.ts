interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  public log(str: string) {
    console.log(str);
  }
}

class ConsoleLogger2 implements Logger {
  public log(str: string) {
    console.log(`Logger 2: ${str}`);
  }
}

interface Database {
  logger: Logger;

  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger) { }

  public save(key: string, value: string) {
    this.logger.log(`database iniciando com key:${key} e value:${value}`);
  }
}

const logger1 = new ConsoleLogger;
const logger2 = new ConsoleLogger2;

const testDatabase = new ExampleDatabase(logger1);
const prodDatabase = new ExampleDatabase(logger2);
const stageDatabase = new ExampleDatabase();

testDatabase.save('sdawDASDw', 'test');
prodDatabase.save('saSASAsa', 'prod');
stageDatabase.save('sdasdASs', 'stage');