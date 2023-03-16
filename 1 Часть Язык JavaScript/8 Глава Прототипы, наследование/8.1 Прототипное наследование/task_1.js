/*
Работа с прототипами

В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?
Должно быть 3 ответа.
*/
let animal = {
	jumps: null,
};
let rabbit = {
	__proto__: animal,
	jumps: true,
};

alert(rabbit.jumps); // ? (1) - покажет true, т.к. есть в самом rabbit

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2) - null, т.к. теперь наследуется от animal

delete animal.jumps;

alert(rabbit.jumps); // ? (3) undefined, т.к. больше нет такого свойства
