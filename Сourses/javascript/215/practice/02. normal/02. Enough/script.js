let getDiet = function (calOfDishes, calPerDay) {
  let canBeEaten = 0;
  let sumOfCals = 0;
  
  for (let i = 0; i < calOfDishes.length; ++i) {
    if (sumOfCals <= calPerDay) {
      sumOfCals += calOfDishes[i];
      // console.log('sumOfCals: ' + sumOfCals);
      ++canBeEaten;
      // console.log('canBeEaten: ' + canBeEaten);
    }
    else {
      break
    };
  };
  
  return canBeEaten - 1;
};


/* Техническое задание

Мяу! Напиши программу, которая будет анализировать мой суточный рацион.

Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.

Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.

*/
