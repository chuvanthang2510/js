function check (a){
    if (a==1) return false;
    for(var i = 2 ; i<=Math.sqrt(a) ; i++)
        if(a%i==0) return false;
    return true;

}
var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))
if(number==1) 
      document.write("Không có số nguyên tố nào !");
else {
    for(var i = 1 ; i<=number;i++)
        if(check(i)==true)
            document.write(i+"</br>");
}