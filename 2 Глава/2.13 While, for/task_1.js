//Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
	alert(i--);
}

//Последнее значение 1. На первой итерации алерт выведет 3, на второй - 2, на третей - 1. Потом i = 0, условие не выполнится
