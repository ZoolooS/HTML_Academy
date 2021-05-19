let incomeTax = 13;
let contributions = 30;

let calculateExpenses = function (netSalary) {
  let gross = 100 * netSalary / (100 - incomeTax);
  
  return Math.round(gross + gross * contributions / 100);
};


/* Техническое задание

Напиши функцию calculateExpenses, которая вычисляет ежемесячные затраты компании на сотрудника из «чистой» зарплаты работника.

Функция должна принимать параметр netSalary – это «чистая» зарплата после вычета налогов.

В переменную incomeTax записан размер НДФЛ в процентах.

В переменной contributions указан общий размер взносов в процентах.

Функция должна возвращать общие затраты компании на сотрудника. Округляй результат вычислений с помощью Math.round.

*/
