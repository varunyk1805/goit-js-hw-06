const text = document.querySelector('#text');
const fontSizeControl = document.querySelector('#font-size-control');
fontSizeControl.addEventListener('input', (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
});

