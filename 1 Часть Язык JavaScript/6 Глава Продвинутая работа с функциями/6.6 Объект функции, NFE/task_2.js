/*
Сумма с произвольным количеством скобок
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(a) {
	let currentSum = a; //1

	function f(b) {
		currentSum += b;
		return f;
	}

	f.toString = function () {
		return currentSum;
	};

	return f;
}

console.log(sum(1)(2) == 3); // 3
alert(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15
