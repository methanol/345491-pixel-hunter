import RulesView from '.././view/rules-view.js';
import {model} from '.././data.js';

export default class RulesPresenter {
  constructor(data) {
    this.data = data;
    this.view = new RulesView();
  }

  create() {
    this.view.getClick = () => {
      const rulesInput = this.view._element.querySelector(`.rules__input`);
      model.userName = rulesInput.value;

      model.resetState();

      this.data.showNextScreen();
    };

    this.view.getBackClick = () => {
      this.data.goBack();
    };

    return this.view.element;
  }
}
