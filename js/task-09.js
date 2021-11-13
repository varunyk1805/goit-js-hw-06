const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const backgroundColor = document.querySelector('body');
let nameColor = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');

const changeColor = () => {
  const randomColor = getRandomHexColor();
  backgroundColor.style.backgroundColor = randomColor;
  nameColor.textContent = randomColor;
};

changeColorBtn.addEventListener('click', changeColor);