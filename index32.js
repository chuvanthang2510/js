// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
// VD: a = [1,3,6,9,11,20]; k = 13 .Output: a = [1,3,6,9,11,13,20]
var a = [1,3,6,9,11,12,20]
function insertArr(arr,k)
{
    var b = arr.find((number) => {
        if(number>k)
            return true;
        return false;
    })
    arr.splice(arr.indexOf(b),0,k);
}
insertArr(a,2);
console.log(a)