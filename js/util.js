const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainScreen = document.querySelector(`.central`);

const selectSlide = (element) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(element);
};

export {selectSlide, render};
