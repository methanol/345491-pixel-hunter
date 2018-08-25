import RulesView from '../view/rules-view.js';
import {model} from '../data.js';
import {selectSlide} from '../util.js';
import HeaderPresenter from './header-presenter.js';

export default class RulesPresenter {
  constructor(data) {
    this.data = data;
    this.view = new RulesView();
  }

  create() {
    model.switchHeaderSmall();

    this.view.getClick = () => {
      const rulesInput = this.view._element.querySelector(`.rules__input`);
      model.writeName(rulesInput.value);
      model.resetState();

      this.data.showNextScreen();
    };

    return selectSlide([new HeaderPresenter(this.data).create(), this.view.element]);
  }
}
