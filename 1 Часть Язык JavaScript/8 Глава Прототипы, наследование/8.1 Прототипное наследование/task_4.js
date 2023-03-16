/*
Почему наедаются оба хомяка?

У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
*/

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	},
};

let speedy = {
	stomach: [],
	__proto__: hamster,
};

let lazy = {
	stomach: [],
	__proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple

/*
При вызове speedy.eat("apple") в stomach добавляется "apple", но у хомяка speedy нет свойства stomach, поэтому this.stomach это свойство
stomach в объекте hamster, "apple" пушится туда. А так как хомяк lazy наследует от объекта hamster, то при обращении к свойству stomach,
он получает значение из hamster. Надо завести каждому хомяку свой stomach и тогда  this.stomach.push(food), будет добавлять еду в stomach 
конкретного хомка.
*/
