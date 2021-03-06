let getDocumentsNumbers = function (namesOfDocs, year) {
  let numDocsForYear = 0;
  
  for (let i = 0; i < namesOfDocs.length; ++i) {
    if (namesOfDocs[i].indexOf(year, 4) === 4) {
      ++numDocsForYear;
    };
  };
  
  return numDocsForYear;
};


/* Техническое задание

Мяу! Напиши программу getDocumentsNumbers, которая будет возвращать число документов за указанный год.

У функции должно быть два параметра: массив с названиями документов и год, за который надо найти документы. Названия параметров могут быть любыми. Даты из массива записаны в виде строк.

Функция должна возвращать количество документов, в названии которых есть необходимый год.

Если таких документов в массиве нет, функция должна возвращать 0.

*/
