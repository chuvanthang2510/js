var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))
var  sodao = 0, rem ;
 
    while(number!= 0)
    {
        rem = number % 10;
        sodao= sodao*10 + rem;
        number /= 10;
    } 
    if(sodao === number) 
        alert(" NO");
    else
        alert(" YES");
    