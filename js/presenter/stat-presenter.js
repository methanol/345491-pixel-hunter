import StatView from '../view/stat-view.js';
import {model} from '../data.js';
import HeaderPresenter from './header-presenter.js';
import {selectSlide} from '../util.js';

/* function GameStatistic(answers, userName = `guest`, lives, counter) {
  this.answers = answers;
  this.userName = userName;
  this.lives = lives;
  this.counter = counter;
}*/

export default class StatPresenter {
  constructor(data) {
    this.data = data;
    this.view = new StatView(model);
  }

  create() {
    model.switchHeaderSmall();
    model.saveResult();
    // model.statistics.unshift(new GameStatistic(model.answers, model.userName, model.lives, model.counter));

    return selectSlide([new HeaderPresenter(this.data).create(), this.view.element]);
  }
}
