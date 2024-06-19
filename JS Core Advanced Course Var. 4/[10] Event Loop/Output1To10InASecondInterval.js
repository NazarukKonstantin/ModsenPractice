// Используя Promise, выведите числа от 1 до
// 10 через секунду каждый раз.
// Ограничения: setTimeout и new Promise() мы
// можно вызывать только один раз.

import { areIntIntervalBorders } from "../CommonValidation.js";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function outputNumsInOrder(
  from=1,
  to=10,
  ascend = true,
  displayFun = displayNum
) {
  if (!areIntIntervalBorders(from, to)) {
    console.log("Interval borders are not numbers");
    return;
  }
  if (from > to) {
    ascend = false;
  }
  if (ascend) {
    for (let i = from; i <= to; i++) {
      await displayFun(i);
    }
  } else {
    for (let i = from; i <= to; i--) {
      await displayFun(i);
    }
  }
}

async function displayNum(num) {
  await delay(1000);
  console.log(num);
}

outputNumsInOrder();