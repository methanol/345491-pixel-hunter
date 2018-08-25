function GameStatistic(answers, userName = `guest`, lives, counter) {
  this.answers = answers;
  this.userName = userName;
  this.lives = lives;
  this.counter = counter;
}

class GameModel {
  constructor() {
    this.lives = 3;
    this.userName = ``;
    this.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
    this.keyCodes = [];
    this.isGameScreen = false;
    this.counter = 0;
    this.statistics = [];
  }

  saveResult() {
    this.statistics.unshift(new GameStatistic(this.answers, this.userName, this.lives, this.counter));
  }

  writeName(name) {
    this.userName = name;
  }

  takeLive() {
    if (this.lives >= 0) {
      --this.lives;
    }
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
    this.isGameScreen = false;
    this.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
  }
}

const model = new GameModel();


export {model};
