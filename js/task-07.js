// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const ref = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

console.log(ref.input);
console.log(ref.span);

ref.input.addEventListener('input', event => {
  ref.span.style.fontSize = `${event.currentTarget.value}px`;
});
