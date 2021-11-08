function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input');
const box = document.querySelector('#boxes');
const boxes = [];

let numberDiv = 0;

const amount = (event) => numberDiv = event.currentTarget.value;

inputNumber.addEventListener('blur', amount);

const createBoxes = () => {
  boxes.length = 0;
  box.innerHTML = ''; 
  for (let i = 0; i < numberDiv; i += 1) {
    let widthBox = 30 + i * 10;
    let heightBox = 30 + i * 10;
    boxes.push(
      `<div style="width:${widthBox}px; height:${heightBox}px; background-color:${getRandomHexColor()}"></div>`);
  }

  console.log(boxes);
  box.insertAdjacentHTML('beforeend', boxes.join(''));
};

createBtn.addEventListener('click', createBoxes);

const destroyBoxes = () => box.innerHTML = '';

destroyBtn.addEventListener('click', destroyBoxes);