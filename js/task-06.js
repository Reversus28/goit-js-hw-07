const inputEl = document.querySelector('[data-length="6"]');
console.log(inputEl.dataset.length);

const onInputFocus = () => {
   if (inputEl.value.length == inputEl.dataset.length) {
   inputEl.classList.remove('invalid');
      inputEl.classList.add('valid');
   };
   if (inputEl.value.length < 6 || inputEl.value.length > 6) {
   inputEl.classList.remove('valid');
      inputEl.classList.add('invalid'); 
      
   }
   if (inputEl.value.length===0) {  inputEl.classList.remove('invalid'); };
 };
  
inputEl.addEventListener('blur', onInputFocus);
 
