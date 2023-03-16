/*
Вывод односвязного списка в обратном порядке
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.
*/

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

//рекурсия
function printListReverse(list) {
	if (list.next) {
		printListReverse(list.next);
	}
	console.log(list.value);
}

printListReverse(list);

//цикл

function printListReverse1(list) {
	let listArr = [];
	let print = list;

	while (print) {
		listArr.push(print.value);
		print = print.next;
	}

	for (let i = listArr.length - 1; i >= 0; i--) {
		console.log(listArr[i]);
	}
}

printListReverse1(list);
