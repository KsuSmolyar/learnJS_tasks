/*
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) 
и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию 
с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b,
	};

	this.calculate = function (str) {
		let arr = str.split(" ");
		let a = +arr[0];
		let b = +arr[2];
		let operator = arr[1];

		if (!this.methods[operator] || isNaN(a) || isNaN(b)) return NaN;
		return this.methods[operator](a, b);
	};

	this.addMethod = function (name, func) {
		this.methods[name] = func;
	};
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator();

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc);

let result = powerCalc.calculate("2 * 3");
console.log(result);

result = powerCalc.calculate("4 / 2");
console.log(result);

result = powerCalc.calculate("2 ** 2");
console.log(result);
