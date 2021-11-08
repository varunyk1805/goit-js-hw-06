const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const outputText = event => {
    if (event.currentTarget.value.length !== 0) {
        return output.textContent = event.currentTarget.value;
    }
        return output.textContent = 'Anonymous';        
}

textInput.addEventListener('input', outputText)