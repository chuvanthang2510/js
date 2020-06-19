// dem khoang trang
var input = prompt("Enter input:")
function countSpace(str){
    var count = 0;
    for (var i = 0; i < str.length ; i++)
        if(str[i]==" ")
            {
                count++;
            }
            return count;
}
alert("Output :" + countSpace(input))