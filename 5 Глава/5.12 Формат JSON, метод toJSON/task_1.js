/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.*/

let user = {
	name: "Василий Иванович",
	age: 35,
};

let userJson = JSON.stringify(user);
console.log(userJson);

let userTwo = JSON.parse(userJson);
console.log(userTwo);
