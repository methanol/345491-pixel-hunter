import StatView from '.././view/stat-view.js';
import {model, GameStatistic} from '.././data.js';

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
