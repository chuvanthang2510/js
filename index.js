var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))

// if (number % 2 == 1) {
//     alert("ODD")
// } else {
//     alert("EVEN")
// }
// window.alert("I love you, too!");

// check prime number
var isPrime = true
if (number < 2) {
    isPrime = false
} else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false
            break
        }
    }
}

alert(isPrime)