import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';

const gameThreeTemplate = (state) => {
  return `<div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
    <ul class="stats">
    ${state.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
    </ul>
    </div>
  </div>`;
};

const renderThirdGame = (data, state) => {
  state.isGameScreen = true;

  const template = `<div>
  ${getHeaderTemplate(state)}
  ${gameThreeTemplate(state)}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const options = element.querySelectorAll(`.game__option`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    data.goBack();
  });

  options.forEach((it) => {
    it.addEventListener(`click`, () => {
      state.answers[3] = (options[0].checked) ? `correct` : `wrong`;

      data.showNextScreen();
    });
  });

  return element;
};

export default renderThirdGame;
