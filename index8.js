function check( n) {
    while (n > 0) {
        var temp = n % 10;
        if (temp % 2 == 1)
            return true;
        n /= 10;
    }
    return false;
}
var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))
if(check(number)==true)
alert("YES")
else alert("NO")