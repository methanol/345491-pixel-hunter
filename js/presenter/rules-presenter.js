import AbstractView from '.././abstract-view.js';
import RulesView from '.././view/rules-view.js';
import FooterView from '.././view/footer-view.js';
import HeaderView from '.././view/header-view.js';
import {workState} from '.././data.js';

workState.isGameScreen = false;

export default class RulesPresenter extends AbstractView {
  getTemplate() {
    return `<div>
    ${new HeaderView().getTemplate()}
    ${new RulesView().getTemplate()}
    ${new FooterView().getTemplate()}
    </div>`;
  }

  bind(element, data) {
    const rulesInput = element.querySelector(`.rules__input`);
    const rulesButton = element.querySelector(`.rules__button`);
    const btnBack = element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      data.goBack();
    });

    rulesInput.addEventListener(`input`, () => {
      rulesButton.disabled = (rulesInput.value === ``) ? true : false;
    });

    rulesButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      workState.userName = rulesInput.value;
      workState.lives = 3;
      workState.counter = 0;
      workState.photoCounter = 0;
      workState.conclusion = `Победа!`;
      workState.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
      data.showNextScreen();
    });
  }
}
