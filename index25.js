// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
var a = [1,2,3,2,3,4,6,7] 
var b = a.map((number) => {
    return number*number;
})
document.write(b);