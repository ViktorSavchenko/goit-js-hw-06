// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const ref = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  valueRef: document.querySelector('#value'),
};

const counterValue = ref.valueRef; //хотя это переменная и не обязательная, создал по услвоию ДЗ. Можно было сделать и без объекта, создав 2 колбэка и засунуть в слушателя.

const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

ref.btnDecrement.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

ref.btnIncrement.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
