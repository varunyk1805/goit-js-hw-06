function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColor = document.querySelector('body');
let nameColor = document.querySelector('.color')

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', () => {
  backgroundColor.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
})