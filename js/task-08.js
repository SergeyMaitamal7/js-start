// Обработка отправки формы form.login-form должна быть
// по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля,
//  выводи alert с предупреждением о том,
//  что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем
//  свойства, а значение поля - значением свойства.
//  Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и
// очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmi);

function onFormSubmi(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены');
  }
 const data = {
    email,
    password
 }
 console.log(data)
 form.reset();
}

// const formData = new FormData(event.currentTarget)
// formData.forEach((x, y) => {
//   console.log(x)
//   console.log(y)
// })
