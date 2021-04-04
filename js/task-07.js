const inputRangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = inputRangeEl.value+"px";

const onInputRangeChange = (event) => { 
   spanEl.style.fontSize = inputRangeEl.value+'px';
};

inputRangeEl.addEventListener('input', onInputRangeChange);