// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');
const message = 'Не все поля заполнены';

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const form = event.currentTarget.elements;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  const FormInfo = {
    email,
    password,
  };

  if (email === '' || password === '') {
    return alert(message);
  }

  console.log(FormInfo);
  event.currentTarget.reset();
}
