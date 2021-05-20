let getSortedArray = function (rawData, sortKey) {
  
  for (let i = 0; i < rawData.length - 1; ++i) {
    for (let j = i + 1; j < rawData.length; ++j) {
      let swap = rawData[i];
      if (rawData[j][sortKey] < rawData[i][sortKey]) {
        rawData[i] = rawData[j]
        rawData[j] = swap;
      }
    }
  }
  
  return rawData;
};


/*

Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.

Функция должна возвращать отсортированный массив объектов.

Значения в массиве должны увеличиваться от меньшего к большему.

*/
