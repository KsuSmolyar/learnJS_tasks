/*
Куда будет произведена запись?

Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
*/

//свойство full при вызове rabbit.eat() получит rabbit, т.к. при вызове на месте this будет rabbit
