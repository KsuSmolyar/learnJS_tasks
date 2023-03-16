/*
Создайте новый объект с помощью уже существующего

Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, 
но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();

Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. 
И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/

//let obj2 = new obj.constructor(); Мы можем сделать так, если своство prototype у функции -конструктора не изменено

//Сработает, если

function Obj1(prop) {
	this.prop = prop;
}

let obj = new Obj1("prop1");
console.log(obj.prop); //prop1

let obj2 = new obj.constructor("prop2");
console.log(obj2.prop); //prop2

//Не сработает

function Obj2(prop) {
	this.prop = prop;
}

Obj2.prototype = {};

let obj3 = new Obj2("prop3");
console.log(obj3.prop); //prop3
let obj4 = new obj3.constructor("prop4");
console.log(obj4.prop); //undefined
