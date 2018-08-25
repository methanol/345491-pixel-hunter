import GreetingView from '../view/greeting-view.js';
import {selectSlide} from '../util.js';

export default class GreetingPresenter {
  constructor(data) {
    this.data = data;
    this.view = new GreetingView();
  }

  create() {
    this.view.getClick = () => {
      this.data.showNextScreen();
    };

    return selectSlide([this.view.element]);
  }

}
