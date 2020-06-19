// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7
function max(a,b,c)
{
    if(a>b && a>c)
        return a;
    else if(b>a && b>c)
        return b;
    return c;
}
function min(a,b,c)
{
    if(a<b && a<c)
        return a;
    else if(b<a && b<c)
        return b;
    return c;
}
alert(max(10,5,9))
alert(min(1,5,4))
