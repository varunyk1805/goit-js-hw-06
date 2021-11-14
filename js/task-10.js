const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('input');
const box = document.querySelector('#boxes');
const boxes = [];

let numberDiv = 0;

const amount = event => numberDiv = Number(event.currentTarget.value);

inputNumber.addEventListener('blur', amount);

const createBoxes = () => {
  const numberOldBoxes = boxes.length;
  const numberNewBoxes = boxes.length + numberDiv;
  for (let i = numberOldBoxes; i < numberNewBoxes; i += 1) {
    let widthBox = 30 + i * 10;
    let heightBox = 30 + i * 10;
    boxes.push(
      `<div style="width:${widthBox}px; height:${heightBox}px; background-color:${getRandomHexColor()}"></div>`
    );
  };

  const newBoxes = boxes.slice(numberOldBoxes);

  box.insertAdjacentHTML('beforeend', newBoxes.join(''));
};

createBtn.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  boxes.length = 0;
  box.innerHTML = '';
};

destroyBtn.addEventListener('click', destroyBoxes);