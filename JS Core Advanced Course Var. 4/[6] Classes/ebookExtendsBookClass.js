// Создайте класс Book со свойствами названия,
// автора и года публикации. Включите метод
// отображения сведений о книге. Создайте
// подкласс под названием «Ebook», который
// наследуется от класса «Book» и включает
// дополнительное свойство для цены книги.
// Переопределите метод отображения, чтобы
// включить цену книги. Создайте экземпляр
// класса «Электронная книга» и отобразите его
// сведения.

import {
  isCurrency,
  isIntNum,
  areOnlyLettersIn,
  mistypeError,
} from "../CommonValidation.js";

class Book {
  constructor(name, author, publishYear) {
    try {
      if (!areOnlyLettersIn(name)) {
        throw new mistypeError(name, "string with letters only");
      } else if (!areOnlyLettersIn(author)) {
        throw new mistypeError(author, "string with letters only");
      } else if (!isIntNum(publishYear)) {
        throw new mistypeError(publishYear, "integer number");
      }
    } catch (err) {
      console.log(err);
    }
    this.name = name;
    this.author = author;
    this.publishYear = publishYear;
  }

  showBook() {
    return (
      "Name: " +
      this.name +
      "\nAuthor: " +
      this.author +
      "\nPublish Year: " +
      this.publishYear
    );
  }
}

class Ebook extends Book {
  constructor(name, author, publishYear, price) {
    super(name, author, publishYear);
    try {
      if (!isCurrency(price)) {
        throw new mistypeError(price, "number");
      }
    } catch (err) {
      console.log(err);
    }
    this.price = price;
  }

  showBook() {
    return super.showBook() + "\nPrice: " + this.price;
  }
}

console.log(new Ebook("Assassin's Apprentice", "Robin Hobb", 1995, "$15.98").showBook());
