//Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function () {
	let x = 5;

	let result = x;
	assert.equal(pow(x, 1), result);

	result *= x;
	assert.equal(pow(x, 2), result);

	result *= x;
	assert.equal(pow(x, 3), result);
});

/*В коде выше три проверки объединены в один блок it, если произойдет ошибка,
то будет не понятно в какой из проверок что то пошло не так.
Надо использовать describe и внутри разбить на несколько проверок */
