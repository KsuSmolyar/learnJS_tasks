/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

let array = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
	let copyArr = [...arr];
	return copyArr.sort((a, b) => a.localeCompare(b));
}

let sorted = copySorted(array);
console.log(sorted);
console.log(array);
