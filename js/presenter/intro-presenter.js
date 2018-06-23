import IntroView from '.././view/intro-view.js';

export default class IntroPresenter {
  constructor(data) {
    this.data = data;
    this.view = new IntroView();
  }

  create() {
    this.view.getClick = () => {
      this.data.showNextScreen();
    };

    return this.view.element;
  }
}
