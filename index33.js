// 33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]

var a = [9,8,7,62,4,5,3,2,1]
function sort(arr)
{
    for(var i = 0 ; i<arr.length;i++)
    for(var j = i+1 ; j<arr.length;j++)
        if(a[i]>a[j])
        {
            var tg = a[i];
            a[i] = a[j];
            a[j] = tg
        }
}
sort(a);
console.log(a)