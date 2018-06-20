import AbstractView from '.././abstract-view.js';
import {workState} from '.././data.js';

export default class GameThreeView extends AbstractView {
  getTemplate({photo1, photo2, photo3}) {
    return `<div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src=${photo1} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src=${photo2} alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src=${photo3} alt="Option 1" width="304" height="455">
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
