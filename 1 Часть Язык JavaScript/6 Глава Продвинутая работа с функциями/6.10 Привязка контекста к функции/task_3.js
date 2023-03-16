/*
Свойство функции после bind

В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

*/
function sayHi() {
	alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
	name: "Вася",
});

alert(bound.test); // что выведет? почему?
//undefined
//у объекта в bind нет свойства test
