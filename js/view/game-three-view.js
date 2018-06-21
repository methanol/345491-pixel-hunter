import AbstractView from '.././abstract-view.js';
import {workState, photos} from '.././data.js';

export default class GameThreeView extends AbstractView {
  get template() {
    return `<div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src=${photos[workState.photoCounter++]} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src=${photos[workState.photoCounter++]} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src=${photos[workState.photoCounter++]} alt="Option 1" width="304" height="455">
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
