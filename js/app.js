const form = document.querySelector('.form-control');
const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#password_check');
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validEmail = new RegExp(regexEmail);
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validPass = new RegExp(regexPass);
const button = document.querySelector('#label');
const ball = document.querySelector('.ball');
const checkbox = document.querySelector('#checkbox');

const submitForm = (e) => {
    e.preventDefault();
    if(userName.value) {
        setSuccessFor(userName)
    } else {
       setErrorFor(userName, 'Username can\'t be empty')
    };

    if(email.value === '') {
        setErrorFor(email, 'Email address can\'t be empty');
    } else if(!email.value.match(validEmail)) {
        setErrorFor(email, 'Please put a valid email address');
    } else {
        setSuccessFor(email);
    };

    if(password.value === '') {
        setErrorFor(password, 'Password can\'t be empty');
    } else if(!password.value.match(validPass)) {
        setErrorFor(password, 'Please put a valid password')
    } else {
        setSuccessFor(password);
    };

    if(passwordCheck.value === '') {
        setErrorFor(passwordCheck, 'Password confirmation can\'t be empty');
    } else if (passwordCheck.value !== password.value) {
        setErrorFor(passwordCheck, 'Password doesn\'t match');
    } else {
        setSuccessFor(passwordCheck)
    };
};

const setSuccessFor = (input) => {
    const formElement = input.parentElement;
    formElement.className = 'form-element success';
};

const setErrorFor = (input, message) => {
    const formElement = input.parentElement;
    const small = formElement.querySelector('small');
    formElement.className = 'form-element error';
    small.textContent = message;
};

const toggleMode = () => {
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const title = container.firstElementChild;
    const button = document.querySelector('#submit');
    [body, container, title, button].forEach(el => el.classList.toggle('dark'))
}

checkbox.addEventListener('change', toggleMode)
form.addEventListener('submit', submitForm);

