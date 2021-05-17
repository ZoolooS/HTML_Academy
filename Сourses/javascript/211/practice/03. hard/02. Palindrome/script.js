let poly = 1221;
let ylop = 0;
let isPalindrome = false;

let num = poly;

while (num > 0) {
  ylop = ylop * 10 + num % 10;
  // console.log('ylop: ' + ylop + ' | ' + poly + ' :poly');
  num = Math.floor(num / 10);
};

if (ylop === poly) {
  isPalindrome = true;
};

/* Техническое задание

Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/
