// Создайте функцию и внутри неё объявите
// переменные с использованием var, let и
// const. Попробуйте обратиться к этим
// переменным вне функции. Какие
// переменные будут видны снаружи функции,
// а какие нет?

function varTypes() {
  var oneVar = 1;
  let twoLet = 2;
  const threeConst = 3;
}

console.log(oneVar); //ReferenceError: oneVar is not defined
console.log(twoLet); //ReferenceError: twoLet is not defined
console.log(threeConst); //ReferenceError: threeConst is not defined