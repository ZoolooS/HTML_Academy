let numbers = [3, 5, 15, 6, 2, 1];

for (let i = 0; i < numbers.length - 1; ++i) {
  for (let j = i + 1; j < numbers.length; ++j) {
    let swap = numbers[i];
    if (numbers[i] > numbers[j]) {
      numbers[i] = numbers[j];
      numbers[j] = swap;
    }
  }
}
console.log(numbers);


/* Техническое задание

Напиши сортировку массива выбором.

Массив записан в переменную numbers.

Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.

*/
