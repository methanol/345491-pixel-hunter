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

  const questions2 = document.querySelectorAll(`input[name="question2"]`);
  const questions1 = document.querySelectorAll(`input[name="question1"]`);
  const btnBack = document.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    selectSlide(render(backSlide));
  });

  document.addEventListener(`change`, () => {
    if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {

      if (questions1[0].checked) {
        stat[0] = `correct`;
      } else {
        stat[0] = `wrong`;
      }

      if (questions2[0].checked) {
        stat[1] = `correct`;
      } else {
        stat[1] = `wrong`;
      }

      goNext();
    }
  });
};
