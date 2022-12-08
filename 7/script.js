// задание 1

//Math.round округляет число к ближайшему большому числу если дробная часть больше или равна 0.5, к ближайшему меньшему -- если меньше 0.5 
const numFirst = Math.round(5.4);
console.log(numFirst);

//Math.ceil округляет число к следующиму целому числу по старшинстве, в не зависимости от того к какому целому числу он ближе
const numTwo = Math.ceil(5.5);
console.log(numTwo);

//Math.floor округляет число к блиско стоящиму числу 
const numThree = Math.floor(5.6);
console.log(numThree);

//  задание 2 Встроенные объекты. Повторение и обобщение изученного

const date = new Date(2022, 10, 27, 19, 20);
console.log('Сегодня ' + date.toLocaleDateString() + ' ' + date.getHours() + ' часов ' + date.getMinutes() + ' минут')