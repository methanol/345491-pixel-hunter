import {render, selectSlide} from '.././util.js';

const introTemplate = () => {
  return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;
};

const renderIntro = (goNext) => {
  selectSlide(render(introTemplate));

  const introAsterisk = document.querySelector(`.intro__asterisk`);

  introAsterisk.addEventListener(`click`, () => {
    goNext();
  }
};

export default renderIntro;
