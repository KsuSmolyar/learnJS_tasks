/*
Возможно ли создать функции A и B, чтобы new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
Если да – приведите пример вашего кода.
*/

//Если обе функции будут возвращать ссылку на один и тот же объект

const object = {};

function A() {
	return object;
}

function B() {
	return object;
}

let a = new A();
let b = new B();

console.log(a == b);
