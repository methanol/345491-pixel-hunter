import AbstractView from '.././abstract-view.js';
import GreetingView from '.././view/greeting-view.js';
import FooterView from '.././view/footer-view.js';

export default class GreetingPresenter extends AbstractView {
  get template() {
    return `<div>
    ${new GreetingView().template}
    ${new FooterView().template}
    </div>`;
  }

  bind(element, data) {
    const greetingContinue = element.querySelector(`.greeting__continue`);

    greetingContinue.addEventListener(`click`, () => {
      data.showNextScreen();
    });
  }
}
