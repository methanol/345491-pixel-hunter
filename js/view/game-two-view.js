import AbstractView from '.././abstract-view.js';
import {workState, photos} from '.././data.js';

export default class GameTwoView extends AbstractView {
  get template() {
    return `<div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src=${photos[workState.photoCounter++]} alt="Option 1" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        <ul class="stats">
        ${workState.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
        </ul>
      </div>
    </div>`;
  }
}
