'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const btnExit = document.querySelector('.btn_exit');
    const userEmail = document.querySelector('.user_mail')
    const field = "user-login";
    let user = null;

<<<<<<< HEAD
    // Получаем данные, введенные пользователем в LocalStorage

=======
>>>>>>> main
    const getLocalStorage = (field) => {
        const value = localStorage.getItem(field);
        if (!value) {
            return null;
        }
        return JSON.parse(value);
    };

<<<<<<< HEAD
    // Функция удаления данных их LS

=======
>>>>>>> main
    const removeLocalStorage = (field) => {
        localStorage.removeItem(field);
    }

<<<<<<< HEAD
    /*
     Событие кнопки "Выход" при котором происходит удаление данных из LS,
     и редирект обратно на страницу незарегистрированного пользователя
     */
=======
>>>>>>> main
    btnExit.addEventListener('click', () => {
        removeLocalStorage(field);
        window.location = "basket.html";
    });

<<<<<<< HEAD
    /*
     Функция проверки авторизации пользователя на данные
     в LS, при успешной проверке выводится приветствие ,
      при неудачном - редирект обратно на страницу входа
     */
=======
>>>>>>> main
    const checkIsLogin = () => {
        user = getLocalStorage(field);
        if (!user) {
            window.location = 'basket.html';
            return;
        }
        userEmail.textContent = 'Добро пожаловать, ' + user.email + '!';
    }
    checkIsLogin();
<<<<<<< HEAD
    
=======

>>>>>>> main
    const productsWrapper = document.querySelector('.products');
    let shopBasket = {
        price: 0,
    };
    let products;

    const cartPrice = document.querySelector('.result__price');
    const cartCount = document.querySelector('.result__count');

    fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((body) => {
            // Получаем данные и заносим их в переменную products
            products = body.products;
            body.products.forEach((product) => {
                const productWrapper = document.createElement('div');
                productWrapper.classList.add('product');

                const productName = document.createElement('h3');
                productName.classList.add('product__name');

                const productDescr = document.createElement('p');
                productDescr.classList.add('product__description');

                const productPriceText = document.createElement('p');
                productPriceText.classList.add('product__price');

                const productImg = document.createElement('img');
                productImg.classList.add('product__img');

                const productBtn = document.createElement('button');
                productBtn.classList.add('btn-danger');
                productBtn.textContent = 'Добавить';

                // Добавляем событие на кнопку со значением click и вызываем заданные функции
                productBtn.addEventListener('click', () => {
                    addToCart(product)
                    changePriceOfCart(product.price)

                    // Проходим по массиву методом Object.keys , получаем из ключей массив данных объекта
                    const prCount = Object.keys(shopBasket).reduce((acc, key) => {
                        // Задаем условие при котором, если ключ === 'price' - возвращаем acc,
                        // cчитаем общее кол-во товаров
                        if (key === 'price') {
                            return acc;
                        }
                        // если нет, тогда возвращаем acc + общее кол-во товара по ключу
                        return acc + shopBasket[key].count;
                    }, 0);
                    cartCount.textContent = prCount;
                });

                // Создаем функцию, которая добавляет товар в корзину
                function addToCart(product) {
                    if (shopBasket[product.id]) {
                        shopBasket[product.id].count = shopBasket[product.id].count + 1;
                    } else {
                        shopBasket[product.id] = Object.assign(product, {count: 1});
                    }
                }
                // Создаем функцию, которая увеличивает корзину на величину равную стоимости товара
                function changePriceOfCart (price) {
                    shopBasket.price = shopBasket.price + product.price;
                    cartPrice.textContent = shopBasket.price + ' руб';
                }

                // Достаем указанные данные из массива и присваиваем их значения переменным
                productName.textContent = product.name;
                productPriceText.textContent = product.price;
                productDescr.textContent = product.description;
                productImg.src = product.img

                productWrapper.append(productImg)
                productWrapper.append(productName)
                productWrapper.append(productDescr)
                productWrapper.append(productPriceText)
                productWrapper.append(productBtn)
                productsWrapper.append(productWrapper)
            })
<<<<<<< HEAD
    })
=======
        })
>>>>>>> main
})