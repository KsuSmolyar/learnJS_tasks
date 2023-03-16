/*
Изменяем "prototype"

В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
*/
//Сначала у нас есть такой код:
//1
function Rabbit1() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit1 = new Rabbit1();

alert(rabbit1.eats); // true

//Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?
//2
function Rabbit2() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit2 = new Rabbit2();

Rabbit.prototype = {};

alert(rabbit2.eats); //  true

//А если код такой (заменили одну строчку)?
//3
function Rabbit3() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit3 = new Rabbit3();

Rabbit.prototype.eats = false;

alert(rabbit3.eats); // false

//Или такой (заменили одну строчку)?
//4

function Rabbit4() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit4 = new Rabbit4();

delete rabbit4.eats;

alert(rabbit4.eats); // true

//Или, наконец, такой:

function Rabbit5() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit5 = new Rabbit5();

delete Rabbit.prototype.eats;

alert(rabbit5.eats); // undefined
