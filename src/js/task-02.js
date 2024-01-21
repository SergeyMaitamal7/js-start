// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createListIngradients = ingredients.map(el => {
  const item = document.createElement('li');
   item.textContent = el;
   item.classList.add('item');
   return item})

// const createListIngradients = ingredientsArr => {
//   return ingredientsArr.map(el => {
//   const item = document.createElement('li');
//    item.textContent = el;
//    item.classList.add('item');
//    return item})
// }
// ingredientsList.append(...createListIngradients(ingredients))

const ingredientsList = document.querySelector('#ingredients')
ingredientsList.append(...createListIngradients)
