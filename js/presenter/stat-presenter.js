import AbstractView from '.././abstract-view.js';
import StatView from '.././view/stat-view.js';
import FooterView from '.././view/footer-view.js';
import HeaderView from '.././view/header-view.js';
import {workState} from '.././data.js';

export default class StatPresenter extends AbstractView {
  get template() {
    workState.isGameScreen = false;
    return `<div>
    ${new HeaderView().template}
    ${new StatView().template}
    ${new FooterView().template}
    </div>`;
  }

  bind(element, data) {
    const btnBack = element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      data.goBack();
    });
  }
}
