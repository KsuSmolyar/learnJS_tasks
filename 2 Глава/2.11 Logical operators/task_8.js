//Какие из перечисленных ниже alert выполнятся?
//Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert("first"); // Сработает (-1 - это true)
if (-1 && 0) alert("second"); //Не сработает (0- falsse)
if (null || (-1 && 1)) alert("third"); //Сработает (1 - true)
