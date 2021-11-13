const loginForm = document.querySelector('.login-form');

const validationInputData = event => {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    const userData = {
        email,
        password
    };

    userData.email = email.value;
    userData.password = password.value;

    if (email.value.length === 0 || password.value.length === 0) {
        alert('Всі поля форми повинні бути заповнені');
    } else if (email.value.includes(' ') || password.value.includes(' ')) {
        alert('Введені дані не повинні містити пробіли');
    } else {
        console.log(userData);
        email.value = '';
        password.value = '';
    }
};

loginForm.addEventListener('submit', validationInputData);