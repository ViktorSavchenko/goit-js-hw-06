// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

const inputEl = document.querySelector('#validation-input');

console.log(inputEl);

const inputContentLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', event => {
  inputEl.classList.remove('invalid', 'valid');

  if (event.currentTarget.value.length === inputContentLength) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
});

//Хотя, думаю, лучше по дефолту в ст.13 поставить инвалида, по условию валид (елсе не нужно будет). Второй вариант очистить и сделать через 2 колбэка по условию.
