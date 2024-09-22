const number = +prompt("Введите число:")
alert(`Введённое число - ${number}\n
Квадрат числа - ${number * number}\n
Куб числа - ${number * number * number}`)

const promocode = prompt("Введите промокод:")
if (promocode === "СкиДкА") {
    alert("Промокод применён")
} else {
    alert("Промокод не работает")
}

const userName = prompt("Ваше имя:")
const yourBirthday = +prompt("Ваш год рождения:")
let currentDate = new Date()
if (yourBirthday && userName && yourBirthday > 0) {
    const residue = (currentDate.getFullYear() - yourBirthday) % 10
    switch(residue) {
        case 1:
            alert(`${userName}: ${currentDate.getFullYear() - yourBirthday} год`)
            break
        case 2:
            alert(`${userName}: ${currentDate.getFullYear() - yourBirthday} года`)
            break
        case 3:
            alert(`${userName}: ${currentDate.getFullYear() - yourBirthday} года`)
            break
        case 4:
            alert(`${userName}: ${currentDate.getFullYear() - yourBirthday} года`)
            break
        default:
            alert(`${userName}: ${currentDate.getFullYear() - yourBirthday} лет`)
    }
    alert(`${userName}: ${currentDate.getFullYear() - yourBirthday}`)
} else {
    alert("Год не число или пустое имя")
}

const yourAge = +prompt("Ваш возраст:")
let sum = null
if (yourAge < 18) {
    alert("Мы не можем выдаь вам кредит")
} else if (yourAge < 22) {
    sum = +prompt("Мы можем выдать вам максимум 50000.\nВведите сумму кратную 1000")
    if (sum % 1000) {
        alert("Вы ввели значение не кратное 1000. Мы можем выдать 45000")
    }
} else if (yourAge < 36) {
    sum = +prompt("Мы можем выдать вам максимум 400000")
    if (sum % 1000) {
        alert("Вы ввели значение не кратное 1000. Мы можем выдать 350000")
    }
} else {
    sum = +prompt("Мы можем выдать вам максимум 1000000")
    if (sum % 1000) {
        alert("Вы ввели значение не кратное 1000. Мы можем выдать 950000")
    }
}