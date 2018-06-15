import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';
import startState from '.././data.js';

const gameOneTemplate = (array, photo1, photo2) => {
  return `<div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${photo1} alt="Option 1" width="468" height="458">
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
        <img src=${photo2} alt="Option 2" width="468" height="458">
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
      ${array.map((it) => `<li class="stats__result stats__result--${it}"></li>`).join(``)}
      </ul>
    </div>
  </div>`;
};

const renderFirstGame = ({goBack, showNextScreen}) => {
  startState.isGameScreen = true;
  const template = `<div>
  ${getHeaderTemplate()}
  ${gameOneTemplate(startState.answers, startState.photos[0], startState.photos[1])}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const questions2 = element.querySelectorAll(`input[name="question2"]`);
  const questions1 = element.querySelectorAll(`input[name="question1"]`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    goBack();
  });

  element.addEventListener(`change`, () => {
    if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {
      if ((questions1[1].checked) && (questions2[1].checked)) {
        startState.answers[startState.counter] = `correct`;
      } else {
        startState.answers[startState.counter] = `wrong`;
        if (startState.lives >= 0) {
          startState.lives--;
        }
      }

      startState.counter++;

      showNextScreen();
    }
  });

  return element;
};

const renderFourthGame = ({goBack, showNextScreen}) => {
  startState.isGameScreen = true;
  const template = `<div>
  ${getHeaderTemplate()}
  ${gameOneTemplate(startState.answers, startState.photos[6], startState.photos[7])}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const questions2 = element.querySelectorAll(`input[name="question2"]`);
  const questions1 = element.querySelectorAll(`input[name="question1"]`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    goBack();
  });

  element.addEventListener(`change`, () => {
    if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {
      if ((questions1[1].checked) && (questions2[1].checked)) {
        startState.answers[startState.counter] = `correct`;
      } else {
        startState.answers[startState.counter] = `wrong`;
        if (startState.lives >= 0) {
          startState.lives--;
        }
      }

      startState.counter++;

      showNextScreen();
    }
  });

  return element;
};

const renderSeventhGame = ({goBack, showNextScreen}) => {
  startState.isGameScreen = true;
  const template = `<div>
  ${getHeaderTemplate()}
  ${gameOneTemplate(startState.answers, startState.photos[12], startState.photos[13])}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const questions2 = element.querySelectorAll(`input[name="question2"]`);
  const questions1 = element.querySelectorAll(`input[name="question1"]`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    goBack();
  });

  element.addEventListener(`change`, () => {
    if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {
      if ((questions1[1].checked) && (questions2[1].checked)) {
        startState.answers[startState.counter] = `correct`;
      } else {
        startState.answers[startState.counter] = `wrong`;
        if (startState.lives >= 0) {
          startState.lives--;
        }
      }

      startState.counter++;

      showNextScreen();
    }
  });

  return element;
};

const renderFinalGame = ({goBack, showNextScreen}) => {
  startState.isGameScreen = true;
  const template = `<div>
  ${getHeaderTemplate()}
  ${gameOneTemplate(startState.answers, startState.photos[18], startState.photos[19])}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const questions2 = element.querySelectorAll(`input[name="question2"]`);
  const questions1 = element.querySelectorAll(`input[name="question1"]`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    goBack();
  });

  element.addEventListener(`change`, () => {
    if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {
      if ((questions1[1].checked) && (questions2[1].checked)) {
        startState.answers[startState.counter] = `correct`;
      } else {
        startState.answers[startState.counter] = `wrong`;
        if (startState.lives >= 0) {
          startState.lives--;
        }
      }

      startState.counter++;

      showNextScreen();
    }
  });

  return element;
};

export {renderFirstGame, renderFourthGame, renderSeventhGame, renderFinalGame};
