import {render} from '.././util.js';
import getFooterTemplate from './footer-template.js';

const introTemplate = () => {
  return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;
};

const renderIntro = (data) => {
  const template = `<div>
  ${introTemplate()}
  ${getFooterTemplate()}
  </div>`;
  const element = render(template);

  const introAsterisk = element.querySelector(`.intro__asterisk`);

  introAsterisk.addEventListener(`click`, () => {
    data.showNextScreen();
  });

  return element;
};

export default renderIntro;
