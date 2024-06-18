// Напишите функцию, которая генерирует
// идентификатор строки (указанной длины) из
// случайных символов

import {
  isIntNum,
  isNum,
} from "../CommonValidation.js";

String.prototype.getHashCode = function (hashCodeLength = this.length) {
  if (!checkInput(hashCodeLength)) {
    return;
  }
  let id = [];
  for (let i = 0; i < hashCodeLength; i++) {
    if (this[i]) {
      let newDigit = Math.floor(this.codePointAt(i) * (1 + Math.random())) % 10;
      id.push(newDigit);
    } else {
      id.push(Math.floor(Math.random() * 100) % 10);
    }
  }
  return +id.toString().split(",").join("");
};

function checkInput(value) {
  if (!isNum(value)) {
    console.log("Input is not a number");
    return false;
  } else if (!isIntNum(value)) {
    console.log("Input is not an integer number");
    return false;
  }
  return true;
}

console.log("sample".getHashCode());
