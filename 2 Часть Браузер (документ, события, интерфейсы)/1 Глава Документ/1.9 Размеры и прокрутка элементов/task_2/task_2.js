/*
Узнать ширину полосы прокрутки

Напишите код, который возвращает ширину стандартной полосы прокрутки.

Для Windows она обычно колеблется от 12px до 20px. 
Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), 
тогда значение может быть 0px.

P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого.
*/

const div = document.querySelector("div");
let scrollWidth = div.offsetWidth - div.clientWidth;
console.log(scrollWidth);
console.log(div.offsetWidth);
console.log(div.clientWidth);
