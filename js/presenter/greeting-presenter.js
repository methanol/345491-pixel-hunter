import AbstractView from '.././abstract-view.js';
import GreetingView from '.././view/greeting-view.js';
import FooterView from '.././view/footer-view.js';

export default class GreetingPresenter extends AbstractView {
  getTemplate() {
    return `<div>
    ${new GreetingView().getTemplate()}
    ${new FooterView().getTemplate()}
    </div>`;
  }

  bind(element, data) {
    const greetingContinue = element.querySelector(`.greeting__continue`);

    greetingContinue.addEventListener(`click`, () => {
      data.showNextScreen();
    });
  }
}
