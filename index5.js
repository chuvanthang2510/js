var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))
var tong = 0 ; 
for(var i=1 ;i<=number ;i++){
    tong+=i;
}
document.write(tong);