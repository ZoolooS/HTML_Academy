let getRepeats = function (rawData) {
  let outputData = {};
  let outputWords = [rawData[0]];
  let outputNumbers = [1];
  
  for (let i = 1; i < rawData.length; ++i) {
    let counter = 0;
    for (let j = 0; j < outputWords.length; ++j) {
      if (rawData[i] === outputWords[j]) {
        ++outputNumbers[j];
        break;
      }
      ++counter;
      
      if (counter === outputWords.length) {
        outputWords.push(rawData[i]);
        outputNumbers.push(1);
        break;
      }
    }
  }
  
  // console.log('outputWords: ' + outputWords.length + '\n' + outputWords);
  // console.log('outputNumbers: ' + outputNumbers.length + '\n' + outputNumbers);
  
  for (let i = 0; i < outputWords.length; ++i) {
    outputData[outputWords[i]] = outputNumbers[i];
  }
  
  return outputData;
};


/*

В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.

Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.

Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.

*/
