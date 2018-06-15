import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';
import startState from '.././data.js';

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

const renderThirdGame = ({goBack, showNextScreen}) => {

  const template = `<div>
  ${getHeaderTemplate()}
  ${gameThreeTemplate(startState.answers, startState.photos[3], startState.photos[4], startState.photos[5])}
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
      if (it === options[0]) {
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

const renderSixthGame = ({goBack, showNextScreen}) => {

  const template = `<div>
  ${getHeaderTemplate()}
  ${gameThreeTemplate(startState.answers, startState.photos[9], startState.photos[10], startState.photos[11])}
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
      if (it === options[0]) {
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

const renderNinthGame = ({goBack, showNextScreen}) => {

  const template = `<div>
  ${getHeaderTemplate()}
  ${gameThreeTemplate(startState.answers, startState.photos[15], startState.photos[16], startState.photos[17])}
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
      if (it === options[0]) {
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

export {renderThirdGame, renderSixthGame, renderNinthGame};
