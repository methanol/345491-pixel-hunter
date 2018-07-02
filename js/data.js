const NO_LIVES = -1;
const NO_COUNTER = 5;

class GameModel {
  constructor() {
    this.lives = 3;
    this.userName = ``;
    this.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
    this.keyCodes = [];
    this.isGameScreen = false;
    this.counter = 0;
    this.fastCounter = 0;
    this.slowCounter = 0;
    this.statistics = [];
  }

  switchHeaderBig() {
    this.isGameScreen = true;
  }

  switchHeaderSmall() {
    this.isGameScreen = false;
  }

  resetState() {
    this.lives = 3;
    this.counter = 0;
    this.fastCounter = 0;
    this.slowCounter = 0;
    this.isGameScreen = false;
    this.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
  }
}

const model = new GameModel();

class GameStatistic {
  constructor(answers, userName = ``, lives = NO_LIVES, counter = NO_COUNTER, fastCounter = NO_COUNTER, slowCounter = NO_COUNTER) {
    this.answers = answers;
    this.userName = userName;
    this.lives = lives;
    this.counter = counter;
    this.fastCounter = fastCounter;
    this.slowCounter = slowCounter;
  }
}

export {model, GameStatistic};
