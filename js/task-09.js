// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const ref = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

ref.button.addEventListener('click', () => {
  const color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.span.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
