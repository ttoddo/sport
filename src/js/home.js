let light = document.querySelector(`#light`)
let dark = document.querySelector(`#dark`)
const root = document.querySelector(':root')
let bell;
light.addEventListener('click', changeColorLight)
dark.addEventListener('click', changeColorDark)

function changeColorLight() {
    light.classList.add('theme-switcher__btn--active')
    dark.classList.remove('theme-switcher__btn--active')
    root.style.setProperty('--tc', '#000000')
    root.style.setProperty('--bgc', '#f8f8f8')
    root.style.setProperty('--hbc', '#fff')
    root.style.setProperty('--hcd', '#818181')
    console.log(root)
}

function changeColorDark() {
    dark.classList.add('theme-switcher__btn--active')
    light.classList.remove('theme-switcher__btn--active')
    root.style.setProperty('--tc', '#E8E9ED')
    root.style.setProperty('--bgc', '#000000')
    root.style.setProperty('--hbc', '#0d0d0d')
    root.style.setProperty('--hcd', '#818181')
    console.log(root)
}

document.addEventListener('DOMContentLoaded', function () {
    const filterNames = document.querySelectorAll('.filter__name')
    const filterChoices = document.querySelectorAll('.filter__choice')

    filterNames.forEach((filterName, index) => {
        filterName.addEventListener('click', function () {
            const filterChoice = filterChoices[index]
            const isActive = filterChoice.classList.contains('active')
            const arrow = filterName.querySelector('.arrow')

            filterChoice.classList.toggle('active')
            arrow.classList.toggle('flipped')

            if (!isActive) {
                requestAnimationFrame(() => {
                    filterChoice.style.maxHeight =
                        filterChoice.scrollHeight + 'px'
                })
            } else {
                filterChoice.style.maxHeight = '0'
            }
        })
    })
})

const fp = flatpickr('#datepicker', {
    mode: 'range',
    dateFormat: 'd.m.Y',
    locale: 'ru',
    onChange: function (selectedDates) {
        if (selectedDates.length === 2) {
            const startDate = formatDate(selectedDates[C_0]())
            const endDate = formatDate(selectedDates[C_1]())
            const result = startDate + '-' + endDate
            document.getElementById('result').innerText = result
            console.log(result)
        } else {
            document.getElementById('result').innerText = ''
        }
    },
})

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    return day + '.' + month
}

document.addEventListener('DOMContentLoaded', function () {
    const minRange = document.getElementById('min')
    const maxRange = document.getElementById('max')

    const amountMin = document.getElementById('amountMin')
    const amountMax = document.getElementById('amountMax')

    function updateMin() {
        amountMin.innerHTML = `<b>Минимальное:</b> ${minRange.value}`
    }

    function updateMax() {
        amountMax.innerHTML = `<b>Максимальное:</b> ${maxRange.value}`
    }

    updateMin()
    updateMax()

    minRange.addEventListener('input', updateMin)
    maxRange.addEventListener('input', updateMax)
})

function changeBell(evt){
    let images = document.querySelectorAll(`#mainImg`);
        if (bell ==  `empty`){
            bell =  `green`;
            console.log(bell);    
        } else {
            bell = `empty`;  
            console.log(bell);    
        }
        evt.src = `../media/bell-${bell}.svg`;
}

function togglePassword() {
    const passwordInput = document.querySelector('#password');
    const toggleIcon = document.querySelector('#toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Показываем пароль
    } else {
        passwordInput.type = 'password'; // Скрываем пароль
    }
}

