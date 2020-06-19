// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
// VD: a = [1,1,1,1,1,1,1,1,1,1], outp -11(params) {
    var b = [1,1,1,1,1,1,1,1,1,1];
    var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] 
function check(a){
    var max=a[0];
    for(var i=1;i<a.length;i++)
    {
           if(a[i]>max) max=a[i];
    }
    var max2=a[0];
    for(var i=1;i<a.length;i++)
    {
        if(a[i]>max2 && a[i]<max) max2=a[i];
    }
       return max2;
       return -1 ;  
   }

document.write(check(a));