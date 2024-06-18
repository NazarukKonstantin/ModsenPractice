// Напишите функцию fetchUserData, которая
// использует async/await для загрузки данных
// о пользователе с сервера по его
// идентификатору. Функция должна
// принимать идентификатор пользователя в
// качестве аргумента и возвращать объект с
// данными о пользователе.

async function fetchUserData(id) {
  try {
    let response = await fetch("url" + id);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
