let minNode = document.querySelector(`#amountMin`);
let maxNode = document.querySelector(`#amountMax`);
let filterButton = document.querySelector(`.filter__head`);
let inputBox = document.querySelector(`.filter__content`);
let bell;

//document.querySelector(`#mainImg`).addEventListener(`click`, changeBell);
document.querySelector(`#min`).addEventListener(`input`, getMin);
document.querySelector(`#max`).addEventListener(`input`, getMax);

function getMax(evt){
    maxNode.innerHTML = `Максимальное: ` + evt.target.value;
}
function getMin(evt){
    minNode.innerHTML = `Минимальное: ` + evt.target.value;
}
function changeBell(evt){
    let images = document.querySelectorAll(`#mainImg`);
        if (bell ==  `empty`){
            bell =  `green`;
            console.log(bell);    
        } else {
            bell = `empty`;  
            console.log(bell);    
        }
        evt.src = `../../media/bell-${bell}.svg`;
}
