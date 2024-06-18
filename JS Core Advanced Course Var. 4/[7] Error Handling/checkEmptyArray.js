// Напишите функцию, которая принимает
// массив в качестве параметра и выдает
// пользовательскую ошибку, если массив пуст.

import { commonValidationError } from "../CommonValidation.js";

function checkArr(arr){
  try{
    if(!arr.length){
      throw new emptyArrayError("Passed array is empty");
    }
  }
  catch(err){
    console.log(err);
  }
}

class emptyArrayError extends commonValidationError{
  constructor(message){
    super(message);
  }
}

checkArr([]);