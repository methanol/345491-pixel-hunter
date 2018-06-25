import RulesView from '.././view/rules-view.js';
import {workState, gamer1} from '.././data.js';

export default class RulesPresenter {
  constructor(data) {
    this.data = data;
    this.view = new RulesView();
  }

  create() {
    this.view.getClick = () => {
      const rulesInput = this.view._element.querySelector(`.rules__input`);
      workState.userName = rulesInput.value;

      gamer1.resetState();

      this.data.showNextScreen();
    };

    this.view.getBackClick = () => {
      this.data.goBack();
    };

    return this.view.element;
  }
}
