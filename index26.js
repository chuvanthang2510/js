// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]
var a = [1,2,3,4,6,7,9]
    var x = prompt("Enter a number");
    x = Number(x);
    function check(number ,a)
    {
        var minNumber = Math.abs(a[0]-number);
        for(var i = 0 ; i<a.length;i++)
            {
                if(Math.abs(a[i]-number)<minNumber)
                    minNumber = Math.abs(a[i]-number);
            }
        return minNumber;
    }
    var t= x - check(x,a);
    var h = x + check(x,a);
    var b = a.filter((number) => {
        if(number==t|| number ==  h)
            return true;
        return false;
    })
    document.write(b)