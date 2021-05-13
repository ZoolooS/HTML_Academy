let firstLeg = 300;
let secondLeg = 700;

let hypotenuse =  Math.round(Math.sqrt(firstLeg ** 2 + secondLeg ** 2));
let perimeter = firstLeg + secondLeg + hypotenuse;
console.log(perimeter);

/* Техническое задание

Мяу! Напиши программу, которая находит периметр треугольника через катеты.

Длины катетов указаны в метрах и хранятся в переменных firstLeg и secondLeg.

Найди гипотенузу по формуле a = sqrt(b^2 + c^2) и запиши результат в переменную hypotenuse. Для того чтобы найти квадратный корень числа, используй Math.sqrt(). Результат округляй с помощью Math.round().

Найди периметр треугольника, сложив длины катетов и гипотенузы. Результат запиши в переменную perimeter.

*/
