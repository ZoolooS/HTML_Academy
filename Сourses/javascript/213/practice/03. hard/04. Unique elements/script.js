let numbers = [1, 4, 5, 9, 2, 5, 1];
let uniqueNumbers = [];

for (let i = 0; i < numbers.length; ++i) {
  let counter = 0;
  for (let j = 0; j < numbers.length; ++j) {
    if (numbers[j] === numbers[i]) {
      ++counter;
    }
  }
  if (counter === 1) {
    uniqueNumbers.push(numbers[i]);
  }
}
console.log(uniqueNumbers);


/* Техническое задание

Напишите программу, которая создаёт массив уникальных значений (тех, что не повторяются), взятых из первого массива.

Исходный массив записан в переменную numbers.

Переберите массив и последовательно добавьте уникальные значения в массив uniqueNumbers. Для добавления новых элементов в массив можете использовать метод
array.push().

*/
