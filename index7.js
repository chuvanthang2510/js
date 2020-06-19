
var answer
var number
do {
    answer = prompt("Enter a number", "0")
    number = Number(answer)
} while (Number.isNaN(number))
var tong =0 ; 
    for(var i = 1 ; i<=number;i++)
       {
        if(i%2 == 1)
        {
            tong+= i ;
            
        }
        
       }
       document.write(tong );