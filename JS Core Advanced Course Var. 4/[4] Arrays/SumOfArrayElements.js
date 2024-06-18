// Напишите функцию, которая принимает
// массив с числами и находит сумму тех
// элементов этого массива, которые больше
// нуля и меньше десяти

import { isNum } from "../CommonValidation.js";

function getSumOfArrElementsInRangeOf(arr, greatThan = 0, lessThan = 10) {
  if (!isArrayNumeric(arr)) {
    console.log("Array is not numeric");
    return NaN;
  }
  let sumArr = arr.filter((e) => e > greatThan && e < lessThan);
  const sum = sumArr.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
}

function isArrayNumeric(arr) {
  return !arr.find(e=>!isNum(e));
}

let checkArr = Array.from(
  { length: 10 },
  () => Math.floor(Math.random()*16)
);
console.log(checkArr);//[ 1, 13, 15,  9, 5, 6,  4,  6, 15, 5]

console.log(getSumOfArrElementsInRangeOf(checkArr));// 36

console.log(getSumOfArrElementsInRangeOf(['a',3,{val:1}])); //NaN