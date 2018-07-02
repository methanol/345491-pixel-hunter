import StatView from '.././view/stat-view.js';
import {model} from '.././data.js';

const NO_LIVES = -1;
const NO_COUNTER = 5;

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

export default class StatPresenter {
  constructor(data) {
    this.data = data;
    this.view = new StatView();
  }

  create() {
    model.statistics.unshift(new GameStatistic(model.answers, model.userName, model.lives, model.counter, model.fastCounter, model.slowCounter));

    this.view.getBackClick = () => {
      this.data.goBack();
    };

    return this.view.element;
  }
}
