/*
Где в DOM-иерархии "document"?
Объектом какого класса является document?

Какое место он занимает в DOM-иерархии?

Наследует ли он от Node или от Element, или может от HTMLElement?
*/
/*
1) Объектом какого класса является document?
document - объект класса HTMLDocument

2) Какое место он занимает в DOM-иерархии?
document является корнем DOM. 

3) Наследует ли он от Node или от Element, или может от HTMLElement?
document является узлом, поэтому все свойства и методы интерфейса Node ему принадлежат. 
document не наследует от Element, т.к. они в дереве соседи.
Интерфейс HTMLElement представляет собой любой элемент HTML.  Document не является элементом
*/
