import {render} from './util.js';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  getTemplate() {
    throw new Error(`Template is required`);
  }

  getElement(data) {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element, data);
    return this._element;
  }

  render() {
    return render(this.getTemplate());
  }

  bind() {

  }
}
