// Напишите функцию, которая принимает
// массив и возвращает true, если в массиве
// есть дубликаты, и false, если нет.
// Используйте строгий режим.

"use strict";

function areThereAnyDuplicatesIn(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.find((e) => e == array[i] && i != array.indexOf(e))) {
      return true;
    }
  }
  return false;
}

console.log(areThereAnyDuplicatesIn([1, "str", 3, "sr"])); //false

console.log(areThereAnyDuplicatesIn([1, "str", 3, "str"])); //true

console.log(areThereAnyDuplicatesIn([1, "str", 1, "sr"])); //true