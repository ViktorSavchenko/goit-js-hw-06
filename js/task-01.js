//   1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const listRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${listRef.length}`);

//  2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

listRef.forEach(item => {
  const categoryOfItem = item.querySelector('h2');
  const elementsOfItem = item.querySelectorAll('li');

  console.log(`Category: ${categoryOfItem.textContent} \nElements: ${elementsOfItem.length}`);
});
