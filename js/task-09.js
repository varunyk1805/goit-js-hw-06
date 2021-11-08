function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColor = document.querySelector('body');
let nameColor = document.querySelector('.color')

const changeColorBtn = document.querySelector('.change-color');

const changeColor = () => {
  backgroundColor.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor()
}

changeColorBtn.addEventListener('click', changeColor)