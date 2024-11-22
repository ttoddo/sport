let light = document.querySelector(`#light`);
let dark = document.querySelector(`#dark`);
const root = document.querySelector(':root');

root.style.setPropert

light.addEventListener(`click`, changeColorLight);
dark.addEventListener(`click`, changeColorDark);

function changeColorLight(){
    light.classList.add(`theme-switcher__btn--active`);
    dark.classList.remove(`theme-switcher__btn--active`);
    console.log(`light`);
    root.style.setProperty('--tc', '#000000');
    root.style.setProperty('--bgc', '#ffffff');
    root.style.setProperty('--hbc', '#acabab');
    root.style.setProperty('--hcd', '#818181');
    root.style.setProperty('--hcd', '#363636');
    console.log(root)
}
function changeColorDark(){
    dark.classList.add(`theme-switcher__btn--active`);
    light.classList.remove(`theme-switcher__btn--active`);
    console.log(`light`);
    root.style.setProperty('--tc', '#ffffff');
    root.style.setProperty('--bgc', '#000000');
    root.style.setProperty('--hbc', '#1b1b1b');
    root.style.setProperty('--hcd', '#818181');
    console.log(root)
}