import {render, selectSlide} from '.././util.js';
import getFooterTemplate from `./footer-template.js`;
import getHeaderTemplate from `./header-template.js`;

const gameOneTemplate = (state) => {
  return `<div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
      ${state.answers.map((it) => `<li class="stats__result stats__result--${it}"></li>`).join(``)}
      </ul>
    </div>
  </div>`;
};

const renderFirstGame = (data, state) => {
  state.isGameScreen = true;
  const template = `<div>
  ${getHeaderTemplate(state)}
  ${gameOneTemplate(state)}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const questions2 = element.querySelectorAll(`input[name="question2"]`);
  const questions1 = element.querySelectorAll(`input[name="question1"]`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    data.goBack();
  });

  element.addEventListener(`change`, () => {
    if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {
      state.answers[0] = (questions1[0].checked) ? `correct` : `wrong`;
      state.answers[1] = (questions2[0].checked) ? `correct` : `wrong`;

      data.showNextScreen();
    }
  });

  return element;
};

export default renderFirstGame;
