const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const onIncrementButtonClick = () => counterValue.textContent = Number(counterValue.textContent) + 1;
const onDecrementButtonClick =  ()=> counterValue.textContent = Number(counterValue.textContent) - 1;

incrementBtn.addEventListener('click', onIncrementButtonClick);
decrementBtn.addEventListener('click', onDecrementButtonClick);