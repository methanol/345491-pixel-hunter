import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';
import {startState} from '.././data.js';

const gameThreeTemplate = (array, photo1, photo2, photo3) => {
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
    ${array.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
    </ul>
    </div>
  </div>`;
};

const renderThirdGame = ({goBack, showNextScreen, photo1, photo2, photo3}) => {

  const template = `<div>
  ${getHeaderTemplate()}
  ${gameThreeTemplate(startState.answers, photo1, photo2, photo3)}
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
      let answerCode = [];
      answerCode[0] = (options[0] === it) ? 1 : 0;
      answerCode[1] = (options[1] === it) ? 1 : 0;
      answerCode[2] = (options[2] === it) ? 1 : 0;

      if (answerCode.join(``) === startState.keyCodes[startState.counter]) {
        startState.answers[startState.counter] = `correct`;
      } else {
        startState.answers[startState.counter] = `wrong`;
        if (startState.lives >= 0) {
          startState.lives--;
        }
      }

      startState.counter++;

      showNextScreen();
    });
  });

  return element;
};

export {renderThirdGame};
