const inputNumberEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-action="render"]');
const btnDeleteEl = document.querySelector('[data-action="destroy"]');
const divListEL = document.querySelector('#boxes');

const createBoxes = () => {
   if (inputNumberEl.value > 0) {
      for (let i = 0; i < inputNumberEl.value ; i += 1) {
         const divItemEl = document.createElement("div");
         const red = Math.floor(Math.random() * 255);
         const green = Math.floor(Math.random() * 255);
         const blue = Math.floor(Math.random() * 255);
 
         divItemEl.style.cssText = `color: blue; background-color: rgb(${red} ${green} ${blue}); width:${30 + i * 10}px; height:${30 + i * 10}px;`;
         divListEL.append(divItemEl);
      }
   }
};

const deleteDivEl = () => {
   document.querySelectorAll('#boxes div').forEach(div => div.remove())
};

btnCreateEl.addEventListener('click', createBoxes);
btnDeleteEl.addEventListener('click',  deleteDivEl)
 


 