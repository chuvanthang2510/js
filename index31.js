// 31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 26 .Output: YES.giải thích ( 9 + 9 + 8)
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 30 .Output: NO
var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]

function check(arr,k)
{
    for ( var i = 0 ; i<arr.length ; i++)
    for (var j = i+1 ; j<arr.length;j++)
        for (var g = j+1;g<arr.length;g++)
            if(arr[i]+arr[j]+arr[g]===k)
                return true
                return false;
}
console.log(check(a,31))
