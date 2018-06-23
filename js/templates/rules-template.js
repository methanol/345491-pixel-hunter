import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';
import {workState} from '.././data.js';

const rulesTemplate = () => {
  return `<div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
};

const renderRules = (data) => {
  workState.isGameScreen = false;

  const template = `<div>
  ${getHeaderTemplate()}
  ${rulesTemplate()}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);

  const rulesInput = element.querySelector(`.rules__input`);
  const rulesButton = element.querySelector(`.rules__button`);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    data.goBack();
  });

  rulesInput.addEventListener(`input`, () => {
    rulesButton.disabled = (rulesInput.value === ``) ? true : false;
  });

  rulesButton.addEventListener(`click`, () => {
    workState.userName = rulesInput.value;
    workState.lives = 3;
    workState.counter = 0;
    workState.photoCounter = 0;
    workState.conclusion = `Победа!`;
    workState.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
    data.showNextScreen();
  });

  return element;
};

export default renderRules;