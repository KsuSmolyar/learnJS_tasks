/*
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [vasya, petya, masha];

function getAverageAge(arr) {
	let ages = 0;
	for (let i = 0; i < arr.length; i++) {
		ages += arr[i].age;
	}
	return Math.round(ages / arr.length);
}

console.log(getAverageAge(users));

//с использованием reduce

let vasya1 = { name: "Вася", age: 24 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 29 };

let users1 = [vasya1, petya1, masha1];

function getAverageAge1(arr) {
	let averageAge =
		arr.reduce((prev, current) => prev + current.age, 0) / arr.length;
	console.log(averageAge);
	return Math.round(averageAge);
}

console.log(getAverageAge1(users1));
