/*
Вычислить сумму чисел до данного
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { /*... ваш код ... }

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/

//Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

//С использованием цикла - второй после арифметической прогрессии, потому что выпонит n операций сложения

function sumTo(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(5));
console.log(sumTo(6));

//С использованием рекурсии - самый медленный, потому что будет запоминаться контекст вызовов

function sumTo1(n) {
	if (n == 1) {
		return n;
	} else {
		return n + sumTo1(n - 1);
	}
}

console.log(sumTo1(2));
console.log(sumTo1(3));
console.log(sumTo1(4));
console.log(sumTo1(5));

//С использованием арифметической прогрессии - самый быстрый вариант, потому что выполняет всего три операции для любого n

function sumTo2(n) {
	return (n * (n + 1)) / 2;
}

console.log(sumTo2(2));
console.log(sumTo2(3));
console.log(sumTo2(4));
console.log(sumTo2(5));
