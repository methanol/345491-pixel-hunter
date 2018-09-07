import IntroView from '../view/intro-view.js';
import {selectSlide} from '../util.js';

export default class IntroPresenter {
  constructor(data) {
    this.data = data;
    this.view = new IntroView();
  }

  create() {
    this.view.getClick = () => {
      this.data.showNextScreen();
    };

    return selectSlide([this.view.element]);
  }
}
