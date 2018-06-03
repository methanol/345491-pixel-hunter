import {render, selectSlide} from './util.js';
import gameTwo from './game-2.js';
import greeting from './greeting.js';

const template = `<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">NN</h1>
  <div class="game__lives">
    <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>
<div class="game">
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
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
</div>
<footer class="footer">
  <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
  <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
  <div class="footer__social-links">
    <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
    <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
    <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
    <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
  </div>
</footer>`;

const gameOne = render(template);

selectSlide(gameOne);

const questionArr1 = document.querySelectorAll(`input[name="question1"]`);
const questionArr2 = document.querySelectorAll(`input[name="question2"]`);
const btnBack = document.querySelector(`button.back`);

const clickBackBtn = (btn) => {
  btn.addEventListener(`click`, () => {
    selectSlide(greeting);
  });
};

clickBackBtn(btnBack);

function checkReady(radio) {
  radio.parentElement.addEventListener(`change`, () => {
    if (((questionArr1[0].checked) || (questionArr1[1].checked)) && ((questionArr2[0].checked) || (questionArr2[1].checked))) {
      selectSlide(gameTwo);
    }
  });
}

questionArr1.forEach((it) => {
  checkReady(it);
});

questionArr2.forEach((it) => {
  checkReady(it);
});

/*  checkReady(question1[0].nextElementSibling, gameTwoElement, ((question1[0].checked) || (question1[1].checked)) && ((question2[0].checked) || (question2[1].checked)));
checkReady(question1[1].nextElementSibling, gameTwoElement, ((question1[0].checked) || (question1[1].checked)) && ((question2[0].checked) || (question2[1].checked)));
checkReady(question2[0].nextElementSibling, gameTwoElement, ((question1[0].checked) || (question1[1].checked)) && ((question2[0].checked) || (question2[1].checked)));
checkReady(question2[1].nextElementSibling, gameTwoElement, ((question1[0].checked) || (question1[1].checked)) && ((question2[0].checked) || (question2[1].checked)));*/

export default gameOne;
