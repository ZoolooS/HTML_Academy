let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

let top = 3; // Топ n прыжков
let sumOfTop = 0; // Сумма топ n прыжков

// Сортируем массив по убыванию
for (let i = 0; i < attempts.length; ++i) {
  for (let j = i + 1; j < attempts.length; ++j) {
    let swap = attempts[i];
    if (attempts[i] < attempts[j]) {
      attempts[i] = attempts[j];
      attempts[j] = swap;
    }
  }
}

for (let i = 0; i < top; ++i) {
  sumOfTop += attempts[i];
}

averageBest = sumOfTop / top;

if (averageBest > qualificationDistance) {
  qualified = true;
}


/* Техническое задание

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/
