import GreetingView from '.././view/greeting-view.js';

export default class GreetingPresenter {
  constructor(data) {
    this.data = data;
    this.view = new GreetingView(this.data);
  }

  create() {
    this.view.getClick = () => {
      this.data.showNextScreen();
    };

    return this.view.element;
  }

}
