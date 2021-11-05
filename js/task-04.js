let counterValue = 0;
const value = document.querySelector('#value');
value.textContent = counterValue;

const decrement = () => {
    counterValue -= 1;
    return value.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    return value.textContent = counterValue;
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', increment);