'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('.input-email');
    const passInput = document.querySelector('.input-password');
    const btn = document.querySelector('.btn');
    const field = "user-login";
    let user = null;

    const getLocalStorage = (field) => {
        const value = localStorage.getItem(field);
        if (!value) {
            return null;
        }
        return JSON.parse(value);
    };

    /*
Создаем функцию setLocalStorage, которая проверяет валидность
данных пользователя перед помещением в локальное хранилище LS
 */
    const setLocalStorage = (field) => {
        const value = { email: emailInput.value, password: passInput.value };
        // console.log(JSON.stringify(value));
        localStorage.setItem("user-login", JSON.stringify(value));
        return value;
    };

    const removeLocalStorage = (field) => {
        localStorage.removeItem(field);
    }



    btn.addEventListener('click', () => {
        user = setLocalStorage(field);
        window.location = "admin.html";
    });

    const checkIsLogin = () => {
        user = getLocalStorage(field);
        if (!user) {
            return;
        }
        window.location = "admin.html";
    }
    checkIsLogin();


})
