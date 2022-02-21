'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const errorBlock = document.querySelector('.error-box');


    const form = document.querySelector('.container');

// Переменные, относящиеся к block_input-email

    const blockInputEmail = document.querySelector('.frame__block_input-email');
    const errorEmail = document.querySelector('.error_email');
    const errorEmailValid = document.querySelector('.error_email-valid');
    const emailInput = document.querySelector('.input-email');

// Переменные, относящиеся к block_input-pass

    const blockInputPass = document.querySelector('.frame__block_input-pass');
    const passInput = document.querySelector('.input-password');
    const errorPass = document.querySelector('.error_pass');
    const errorPassValid = document.querySelector('.error_pass-valid');

// Переменные, относящиеся к frame__checkbox-block

    const errorCheckbox = document.querySelector('.error_checkbox');
    const checkbox = document.querySelector('.checkbox-wrapper__checkbox-mark');
    const checkboxField = document.getElementById('input-checkbox');
    const span = document.querySelector('.span');

    const btn = document.getElementById('btn');

    let flagEmail;
    let flagPass;
    const field = 'user-login';
    let user = null;


    form.addEventListener('submit', (event) => {

        // Создаем функцию проверки эмейла на валидность

        const validationOfEmail = () => {
            if (emailInput.value === '') {
                errorEmail.classList.add('error_email_visible');
                emailInput.classList.add('input-email_visible');
                blockInputEmail.classList.add('frame__block_input-email_visible');

            } else if (!validateEmail(emailInput.value)) {
                errorEmailValid.classList.add('error_email-valid_visible');
                errorEmail.style.display = 'none';
                emailInput.classList.add('input-email_visible');
                blockInputEmail.classList.add('frame__block_input-email_visible');
            } else {
                errorEmail.classList.remove('error_email_visible');
                errorEmailValid.classList.remove('error_email-valid_visible');
                emailInput.classList.remove('input-email_visible');
                blockInputEmail.classList.remove('frame__block_input-email_visible');
                flagEmail = true;
            }
        }

        // Создаем функцию проверки пароля на валидность

        const validationOfPass = () => {
            if (passInput.value === '') {
                errorPass.classList.add('error_pass_visible');
                passInput.classList.add('input-password_visible');
                blockInputPass.classList.add('frame__block_input-pass_visible');
            } else if
            (passInput.value.length < 8) {
                errorPass.style.display = 'none';
                errorPassValid.classList.add('error_pass-valid_visible');
                passInput.classList.add('input-password_visible');
                blockInputPass.classList.add('frame__block_input-pass_visible');
            } else {
                errorPass.classList.remove('error_pass_visible');
                errorPassValid.classList.remove('error_pass-valid_visible');
                blockInputPass.classList.remove('frame__block_input-pass_visible');
                passInput.classList.remove('input-password_visible');
                flagPass = true;
            }
        }

        // Создаем функцию проверки чекбокса на значение checked

        const checkBoxValid = () => {
            if (!checkboxField.checked) {
                errorCheckbox.classList.add('error_checkbox_visible');
                checkbox.classList.add('checkbox-wrapper__checkbox-mark_visible');
                span.classList.add('span_visible');
            } else {
                errorCheckbox.classList.remove('error_checkbox_visible');
                checkbox.classList.remove('checkbox-wrapper__checkbox-mark_visible');
                span.classList.remove('span_visible');
            }
        }

        // функция проверки email на валидность

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3} \])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        /* Выводим результат ввода в input email и password в объекте
        И при валидном вводе перенаправляет на страницу магазина
         */



        const resultInput = () => {
            if (flagEmail && flagPass && checkboxField.checked) {
                console.log({email: emailInput.value, password: passInput.value});
                window.location.assign('basket.html')
            } else {
                errorBlockFun()
            }
        }

        function errorBlockFun() {
            const errorText = document.createElement('p');
            errorText.classList.add('er-text');
            errorText.textContent = 'Введите данные корректно, чтобы продолжить покупки!'
            errorBlock.append(errorText)
        }

        const getLocalStorage = (field) => {
            const value = localStorage.getItem(field);
            if (!value) {
                return null;
            }
            return JSON.parse(value);
        };
        getLocalStorage(field);

        /*
    Создаем функцию setLocalStorage, которая проверяет валидность
    данных пользователя перед помещением в локальное хранилище LS
     */
        const setLocalStorage = () => {
            const value = {email: emailInput.value, password: passInput.value};
            // console.log(JSON.stringify(value));
            localStorage.setItem("user-login", JSON.stringify(value));
            return value;
        };


        // Вызов функций проверок email, password, checkbox, LS
        user = setLocalStorage()
        validationOfEmail(flagEmail)
        validationOfPass(flagPass)
        checkBoxValid()
        resultInput()
        setLocalStorage(field)

        event.preventDefault()
    })
})


























