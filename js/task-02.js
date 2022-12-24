// 1. Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredients = document.querySelector('#ingredients');

const createElement = ingredients => {
  return ingredients.map(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = `${item}`;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const listOfItems = createElement(ingredients);

listOfIngredients.append(...listOfItems);
