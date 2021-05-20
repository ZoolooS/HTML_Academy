let zip = function (keys, values) {
  let dict = {};
  
  if (keys.length <= values.length) {
    for (let i = 0; i < keys.length; ++i) {
      dict[keys[i]] = values[i];
    }
  }
  else {
    for (let i = 0; i < values.length; ++i) {
      dict[keys[i]] = values[i];
    }
  }
  
  return dict;
};

let getData = function (keys, values) {
  let output = [];
  
  for (let i = 0; i < values.length; ++i) {
    output.push(zip(keys, values[i]));
  }
  
  return output;
};


/*

Создайте функцию getData. У неё должно быть два параметра. Первый параметр — массив с ключами. Второй — массив с массивами данных.

Функция должна собрать объект для каждого массива значений. Каждый из этих объектов должен быть записан в массив. Именно этот массив с объектами должна вернуть функция getData.

Каждому элементу из массива ключей подходит элемент с таким же индексом в массиве значений.

Есть один нюанс: значений может оказаться больше или меньше, чем ключей.

Если значений не хватает, то создавать пустой ключ не надо. А если значений больше, то их не нужно включать в объект — для них нет ключей.

*/
