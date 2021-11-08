const validationInput = document.querySelector('#validation-input');

const validLength = event => {
    if (event.currentTarget.value.length !== Number(validationInput.dataset.length)) {
        return validationInput.classList.add('invalid'),
            validationInput.classList.remove('valid');
    } return validationInput.classList.remove('invalid'),
        validationInput.classList.add('valid');
}

validationInput.addEventListener('blur', validLength);