/*
Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/
let arr = ["a", "b"];

arr.push(function () {
	console.log(this);
});

arr[2]();

/*Добавляем к конец массива функцию, которая при вызове возвращает в консоль сам массив (this), вызываем функцию (arr[2]();) */
