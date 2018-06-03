export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainScreen = document.querySelector(`.central`);

const selectSlide = (element) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(element);
};

export {selectSlide};

/*  export const goBack = (btn, slide) => {
  btn.addEventListener(`click`, () => {
    selectSlide(slide)
  });
};

export const checkReady = (radio, screen, cond) => {
  radio.addEventListener(`mousedown`, () => {
    alert(`click`);
    if (cond) {
      selectSlide(screen);
    }
  });
}*/
