let getPrice = function (hoursPerProject, isUrgent) {
  let pricePerHour = 1500;
  let timeСutoff  = 150;
  
  if (isUrgent === true) {
    hoursPerProject /= 2;
    pricePerHour *= 2.5;
  };
  if (hoursPerProject > timeСutoff) {
    pricePerHour -= 250;
  };
  return hoursPerProject * pricePerHour
};
      
let getProfitableProject = function (hoursPerProject, incomeIfUrgent) {
  let priceIfUrgent = getPrice(hoursPerProject, true) - incomeIfUrgent;
  let priceIfNotUrgent = getPrice(hoursPerProject, false);

  if (priceIfUrgent < priceIfNotUrgent) {
    return 'Выгодней срочный проект. Потратишь на него ' + priceIfUrgent;
  }
  else {
    return 'Выгодней обычный проект. Потратишь на него ' + priceIfNotUrgent;
  }
};

// console.log(getProfitableProject(50, 70000));
// console.log(getProfitableProject(180, 300000));
// console.log(getProfitableProject(400, 250000));


/* Техническое задание

Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция принимает на вход два параметра:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров могут быть любыми.

Внутри функции надо сравнить два проекта: срочный и обычный.

Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:


- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/
