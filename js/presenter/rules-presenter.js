import RulesView from '.././view/rules-view.js';
import {workState} from '.././data.js';

workState.isGameScreen = false;

export default class RulesPresenter {
  constructor(data) {
    this.data = data;
    this.view = new RulesView();
  }

  create() {
    this.view.getClick = () => {
      const rulesInput = this.view._element.querySelector(`.rules__input`);

      workState.userName = rulesInput.value;
      workState.lives = 3;
      workState.counter = 0;
      workState.photoCounter = 0;
      workState.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
      this.data.showNextScreen();
    };

    this.view.getBackClick = () => {
      this.data.goBack();
    };

    return this.view.element;
  }
}
