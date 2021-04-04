const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const btnEl = document.querySelector('button[data-action="clear"]');
 
const onInputChange = () => {
   if (!inputEl.value ) {
      return spanEl.textContent='незнакомец';
   }
   return spanEl.textContent = inputEl.value;
};

const onBtnClick = () => {
   if (inputEl.value) {
      spanEl.textContent = 'незнакомец'
      inputEl.value = '';
   }
}// Просто захотелось добавить кнопку "очистить", чтобы было легче проверять

inputEl.addEventListener('input', onInputChange);
btnEl.addEventListener('click', onBtnClick);
 