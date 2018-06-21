import AbstractView from '.././abstract-view.js';
import IntroView from '.././view/intro-view.js';
import FooterView from '.././view/footer-view.js';

export default class IntroPresenter extends AbstractView {
  get template() {
    return `<div>
    ${new IntroView().template}
    ${new FooterView().template}
    </div>`;
  }

  bind(element, data) {
    const introAsterisk = element.querySelector(`.intro__asterisk`);

    introAsterisk.addEventListener(`click`, () => {
      data.showNextScreen();
    });
  }
}
