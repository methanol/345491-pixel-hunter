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


export {model};
