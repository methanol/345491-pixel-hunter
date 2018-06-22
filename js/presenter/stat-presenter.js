import StatView from '.././view/stat-view.js';

export default class StatPresenter {
  constructor(data) {
    this.data = data;
    this.view = new StatView();
  }

  create() {
    this.view.getBackClick = () => {
      this.data.goBack();
    };

    return this.view.element;
  }
}
