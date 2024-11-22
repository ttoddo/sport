let minNode = document.querySelector(`#amountMin`);
let maxNode = document.querySelector(`#amountMax`);
let filterButton = document.querySelector(`.filter__head`);
let inputBox = document.querySelector(`.filter__content`);


filterButton.addEventListener(`click`, showContent);

document.querySelector(`#min`).addEventListener(`input`, getMin);
document.querySelector(`#max`).addEventListener(`input`, getMax);

function getMax(evt){
    maxNode.innerHTML = `Максимальное: ` + evt.target.value;
}
function getMin(evt){
    minNode.innerHTML = `Минимальное: ` + evt.target.value;
}

