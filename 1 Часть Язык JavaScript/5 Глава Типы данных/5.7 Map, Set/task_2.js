/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
	let acleanArr = new Map();

	for (let word of arr) {
		let sorted = word
			.toLowerCase()
			.split("")
			.sort((a, b) => a.localeCompare(b))
			.join(" ");
		acleanArr.set(sorted, word);
	}

	return [...acleanArr.values()];
}

console.log(aclean(words));
