import InitialGameView from '../initial-game-view.js';
import FooterView from './footer-view.js';

export default class IntroView extends InitialGameView {
  constructor() {
    super();
  }

  get template() {
    return `<div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${new FooterView().template}`;
  }

  bind() {
    const introAsterisk = this._element.querySelector(`.intro__asterisk`);

    introAsterisk.addEventListener(`click`, () => {
      this.getClick();
    });
  }
}
