/*
Разница между вызовами

Давайте создадим новый объект rabbit:
*/
function Rabbit(name) {
	this.name = name;
}
Rabbit.prototype.sayHi = function () {
	console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");
//Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); //Rabbit
Rabbit.prototype.sayHi(); //undefined
console.log(Object.getPrototypeOf(rabbit) === Rabbit.prototype);
Object.getPrototypeOf(rabbit).sayHi(); //undefined
console.log(Object.getPrototypeOf(rabbit) === rabbit.__proto__);
rabbit.__proto__.sayHi(); //undefined
