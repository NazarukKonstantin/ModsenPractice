// Напишите функцию, которая принимает
// число и выводит количество цифр в этом
// числе

function getAmountOfDigitsIn(num) {
  if (isNum(num)) {
    let str = num.toString();
    if (typeof num !== "bigint") {
      if (str.indexOf(".") != -1) {
        str = str.split('.').join('');
      }
    } else {
      str.slice(0, -1);
    }
    if (str[0] == "-") {
      str = str.slice(1);
    }
    return str.length;
  } else console.log("Can't count");
}

function isNum(value) {
  if (
    (!Number.isNaN(value) &&
      typeof value === "number" &&
      Number.isFinite(value)) ||
    typeof value === "bigint"
  ) {
    return true;
  }
  return false;
}

console.log(getAmountOfDigitsIn(1111111111)); //10
console.log(getAmountOfDigitsIn(-1111111111)); //10
console.log(getAmountOfDigitsIn(BigInt(1111111111))); //10
console.log(getAmountOfDigitsIn(1111111.111)); //10