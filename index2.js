var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))
for (var i = 1; i <= number; i++){

    if(i%2 != 0 )
    document.write(i+"<br/>") ;
}