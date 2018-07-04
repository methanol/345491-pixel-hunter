import InitialGameView from '../initial-game-view.js';
import FooterView from '../view/footer-view.js';
import HeaderView from '../view/header-view.js';
import {model} from '../data.js';

export default class RulesView extends InitialGameView {
  get template() {
    model.switchHeaderSmall();

    return `${new HeaderView().template}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${new FooterView().template}`;
  }

  bind() {
    const rulesInput = this._element.querySelector(`.rules__input`);
    const rulesButton = this._element.querySelector(`.rules__button`);
    const btnBack = this._element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      this.getBackClick();
    });

    rulesInput.addEventListener(`input`, () => {
      rulesButton.disabled = (rulesInput.value === ``);
    });

    rulesButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.getClick();
    });
  }
}
