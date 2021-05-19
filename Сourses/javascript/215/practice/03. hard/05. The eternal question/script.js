let calculateDeposit = function (startDeposit, percentPerYear, period, isCap) {
  if (isCap) {
    let currentDeposit = startDeposit;
    for (let i = 0; i < period; ++i) {
      currentDeposit += percentPerYear / 12 / 100 * currentDeposit;
    };
    return Math.floor(currentDeposit);
  };
  
  return Math.floor(startDeposit + (percentPerYear / 12 * period / 100 * startDeposit));
};

let getProfitableDeposit = function (startDeposit, period, percentSimple, percentCap) {
  let profitWithCap = calculateDeposit(startDeposit, percentCap, period, true);
  let profitWOCap = calculateDeposit(startDeposit, percentSimple, period, false);
  
  if (profitWithCap > profitWOCap) {
    return 'Выбирай капитализацию. Получишь ' + profitWithCap;
  };
  return 'Выбирай обычный вклад. Получишь ' + profitWOCap;
};


/* Техническое задание

Мяу! Мне нужна программа getProfitableDeposit для сравнения вкладов. У неё должно быть четыре параметра:

исходный размер депозита;
срок депозита в месяцах;
процентная ставка для депозита с простыми процентами;
процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитать, сколько я получу с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

'Выбирай обычный вклад. Получишь ' + доход от вклада.
'Выбирай капитализацию. Получишь ' + доход от вклада.

*/
