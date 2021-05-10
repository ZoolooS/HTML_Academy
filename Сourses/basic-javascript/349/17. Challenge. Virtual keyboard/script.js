let display = document.querySelector('.display');
let keys = document.querySelectorAll('.key');
let clear = document.querySelector('.clear');
let del = document.querySelector('.del');

for (let key of keys) {
  key.onclick = function () {
    display.textContent += key.textContent;
  };
};

clear.onclick = function () {
  display.textContent = "";
};

// TODO добавить кнопку посимвольного удаления текста.
// del.onclick = function () {
//     display.textContent = [display.textContent.length - 1];
//   };

/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
