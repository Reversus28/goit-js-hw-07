const inputNumberEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-action="render"]');
const btnDeleteEl = document.querySelector('[data-action="destroy"]');
const divListEL = document.querySelector('#boxes');

const generateDivEl = () => {
   if (inputNumberEl.value > 0) {
      for (let i = 0; i < inputNumberEl.value ; i += 1) {
         const divItemEl = document.createElement("div");
 
         divItemEl.style.cssText = `color: blue; background-color:#${+Math.floor(Math.random() * (8999 )) + 1000};width:${30 + i * 10}px; height:${30 + i * 10}px;`;
         divListEL.append(divItemEl);
         
      }
   }
  
};

const deleteDivEl = () => {
   document.querySelectorAll('#boxes div').forEach(div => div.remove())
};

btnCreateEl.addEventListener('click', generateDivEl);
btnDeleteEl.addEventListener('click',  deleteDivEl)
 


 