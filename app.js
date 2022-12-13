var num = 0
do {
   if(num % 2 === 0) console.log(num)
    num++
}while (num <=20)
var number = 0
do {
   var numberNot = prompt('Dzje');
    if (numberNot > 0) {
        number -= numberNot
    } else {
        alert(number)
        break
    }
}while (number)
