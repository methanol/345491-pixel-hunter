import HeaderView from '../view/header-view.js';
import {model} from '../data.js';

export default class HeaderPresenter {
  constructor(data) {
    this.data = data;
    this.view = new HeaderView(model);
  }

  create() {
    this.view.getBackClick = () => {
      this.data.goBack();
    };

    return this.view.element;
  }
}
