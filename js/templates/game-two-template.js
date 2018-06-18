import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';
import {workState} from '.././data.js';

const gameTwoTemplate = (nouns, photo1) => {
  return `<div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${photo1} alt="Option 1" width="705" height="455">
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
      ${nouns.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
      </ul>
    </div>
  </div>`;
};

const renderSecondGame = ({goBack, showNextScreen, photo1}) => {

  const template = `<div>
  ${getHeaderTemplate()}
  ${gameTwoTemplate(workState.answers, photo1)}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);

  const questions1 = element.querySelectorAll(`input[name="question1"]`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    goBack();
  });

  element.addEventListener(`change`, () => {
    if ((questions1[0].checked) || (questions1[1].checked)) {

      const answerCode = [...questions1].map((it) => it.checked ? 1 : 0).join(``);

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
    }
  });

  return element;
};

export {renderSecondGame};
