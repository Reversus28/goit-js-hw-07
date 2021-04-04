const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

(function createListElements (array) {
   const listEl = document.querySelector('#ingredients');
     const listItem = ingredients.map(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        return listItem;
     });
   return listEl.append(...listItem)
})(ingredients);
 
 