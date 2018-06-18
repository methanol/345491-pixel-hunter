import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';
import {workState} from '.././data.js';

const gameThreeTemplate = (nouns, photo1, photo2, photo3) => {
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
    ${nouns.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
    </ul>
    </div>
  </div>`;
};

const renderThirdGame = ({goBack, showNextScreen, photo1, photo2, photo3}) => {

  const template = `<div>
  ${getHeaderTemplate()}
  ${gameThreeTemplate(workState.answers, photo1, photo2, photo3)}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const options = element.querySelectorAll(`.game__option`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    goBack();
  });

  options.forEach((it) => {
    it.addEventListener(`click`, () => {

      const answerCode = [...options].map((item) => (it === item) ? 1 : 0).join(``);

      if (answerCode === workState.keyCodes[workState.counter]) {
        workState.answers[workState.counter] = `correct`;
      } else {
        workState.answers[workState.counter] = `wrong`;
        if (workState.lives >= 0) {
          workState.lives--;
        }
      }

      workState.counter++;

      showNextScreen();
    });
  });

  return element;
};

export {renderThirdGame};
