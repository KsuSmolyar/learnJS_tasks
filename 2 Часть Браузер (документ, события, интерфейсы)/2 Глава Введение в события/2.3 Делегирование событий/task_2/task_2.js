/*
Раскрывающееся дерево
Создайте дерево, которое по клику на заголовок скрывает-показывает потомков
Требования:

Использовать только один обработчик событий (применить делегирование)
Клик вне текста заголовка (на пустом месте) ничего делать не должен.
*/

const tree = document.querySelector(".tree");

for (let li of tree.querySelectorAll("li")) {
	let span = document.createElement("span");
	li.prepend(span);
	span.append(span.nextSibling);
}

tree.addEventListener("click", (event) => {
	if (event.target.tagName != "SPAN") {
		return;
	}

	let childrenContainer = event.target.parentNode.querySelector("ul");
	if (!childrenContainer) return;

	childrenContainer.hidden = !childrenContainer.hidden;
});
