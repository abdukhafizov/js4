// let name = 'alex'
// let money = 10000
// let acc = 7000

// let usname= prompt("Как вас зовут?").toLowerCase()

// if (usname == 'alex') {

//   let numbers = prompt("номер счета")

//   if (numbers == 7777 )
//  {
//   let acc = prompt('Сколько вы хотите обналичить?')

//   if ( acc <= 10000) {
//     alert('Отлично!')
//   } else {
//     alert("Недостаточно средств!")
//   }
// } else {
//     alert("не правильный номер счета! Вам стоит выйти.")
//   }

// } else{
//     alert("пользователь не найден")   
// }

//2 задание

let people = prompt("сколько людей хотят зайти?")


if (people <= 10) {
    let usname = prompt("Как вас зовут?").toLowerCase()
    if (usname[0] === 'a') {
        let old = prompt('Сколько вам лет')
        if (old >= 20 && old <= 40) {
        } else {
            alert('Вам стоит уйти!')
        }
        let acc = prompt('сколько у вас денег?')
        if (acc >= 100) {
            alert('Отлично!')
        } else {
            alert("Недостаточно средств!")
        }
    }
    else {
        alert('Вас нет в списке!')
    }

} else {
    alert("Слишком много людей!")
}





