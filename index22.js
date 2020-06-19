// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5
// Danh sách các phần tử
var a = [1,2,3,4,5,6,7,8,10,9,8,7,6,5,4,3,2,1]  ;
 
// Lấy giá trị lớn nhất và nhỏ nhất
var max = Math.max.apply(Math, a); 
var min = Math.min.apply(Math, a);
var tb =  (max + min )/ 2 ;
// In giá trị ra màn hình
document.write("Giá trị lớn nhất là " +max+ "<br/>");
document.write("Giá trị nhỏ nhất là " +min+ "<br/>");
document.write("so trung binh :"+ tb + "</br>");