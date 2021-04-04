const listItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${listItemsEl.length} категории.` );
 
listItemsEl.forEach(item => console.log(`Категория: ${item.firstElementChild.textContent}
Количество элементов: ${item.lastElementChild.children.length}`));