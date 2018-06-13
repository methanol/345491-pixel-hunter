import {render, selectSlide} from '.././util.js';

const gameScreenTemplate = (level, state) => {
  return `<div class="game">
    <p class="game__task">${level.gameTask}</p>
    ${level.gameContent}
    <div class="stats">
    <ul class="stats">
    ${state.gameStat.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
    </ul>
    </div>
  </div>`;
};

const renderGame = (goNext, backSlide, stat) => {
  selectSlide(render(gameScreenTemplate(level, state)));

  const options = document.querySelectorAll(`.game__option`);
  const btnBack = document.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    selectSlide(render(backSlide));
  });

  options.forEach((it) => {
    it.addEventListener(`click`, () => {

      if (options[0].checked) {
        stat[0] = `correct`;
      } else {
        stat[0] = `wrong`;
      }

      goNext();
    });
  });
};
