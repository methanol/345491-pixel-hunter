const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainScreen = document.querySelector(`.central`);

const selectSlide = (elements) => {
  mainScreen.innerHTML = ``;

  for (let element of elements) {
    mainScreen.appendChild(element);
  }
};

export {selectSlide, render};
