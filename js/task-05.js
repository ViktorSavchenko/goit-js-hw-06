// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const ref = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', event => {
  ref.span.textContent = 'Anonymous';

  if (event.currentTarget.value.trim() !== '') {
    ref.span.textContent = event.currentTarget.value;
  }
});
