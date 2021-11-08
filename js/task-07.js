const text = document.querySelector('#text');
const fontSizeControl = document.querySelector('#font-size-control');

fontSizeControl.setAttribute('value', '16')

const changeFontSize = (event) => text.style.fontSize = event.currentTarget.value + 'px';    
    
fontSizeControl.addEventListener('input', changeFontSize);

