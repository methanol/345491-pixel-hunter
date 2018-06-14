import {render, selectSlide} from '.././util.js';
import getFooterTemplate from `./footer-template.js`;
import getHeaderTemplate from `./header-template.js`;

const gameTwoTemplate = (state) => {
  return `<div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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
      ${state.answers.map((it) =>
      `<li class="stats__result stats__result--${it}"></li>`).join(``)}
      </ul>
    </div>
  </div>`;
};

const renderSecondGame = (nextPage, backSlide, state) => {
  const template = `<div>
  ${getHeaderTemplate(state)}
  ${gameTwoTemplate(state)}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);

  const questions1 = element.querySelectorAll(`input[name="question1"]`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    selectSlide(backSlide);
  });

  element.addEventListener(`change`, () => {
    if ((questions1[0].checked) || (questions1[1].checked)) {
      state.answers[2] = (questions1[0].checked) ? `correct` : `wrong`;

      selectSlide(nextPage);
    }
  });

  return element;
};

export default renderSecondGame;
