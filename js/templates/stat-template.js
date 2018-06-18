import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';
import getHeaderTemplate from './header-template.js';
import {workState} from '.././data.js';
import getScore from '.././get-score.js';

const LIFE_PRICE = 50;
const FAIL = `FAIL`;

const showScore = (result) => {
  if (result.counter < 10) {
    return FAIL;
  } else {
    return getScore(result) - (result.lives * LIFE_PRICE);
  }
};

const statTemplate = (result) => {
  return `<div class="result">
    <h1>${(result.lives >= 0) ? `Победа!` : `Поражение!`}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${result.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${showScore(result)}</td>
      </tr>
      ${(result.lives >= 0) ? `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">0</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${result.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${result.lives * LIFE_PRICE}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">0</td>
      </tr>` : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getScore(workState)}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            ${result.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        <td colspan="2">
          <ul class="stats">
          ${result.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getScore(workState)}</td>
      </tr>
    </table>
  </div>`;
};

const renderStat = ({goBack}) => {
  workState.isGameScreen = false;

  const template = `<div>
  ${getHeaderTemplate()}
  ${statTemplate(workState)}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);
  const btnBack = element.querySelector(`button.back`);

  btnBack.addEventListener(`click`, () => {
    goBack();
  });

  return element;
};

export default renderStat;
