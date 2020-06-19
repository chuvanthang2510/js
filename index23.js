// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3
var   a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
var i = 0, max = 0,index = 0;
	var frequency;
	while(i < a.length)	{
 
		frequency = 1;
 
		while(a[i] == a[i+1])	{
 
			frequency++;
			i++;
		}
 
		if(max < frequency)	{
 
			max = frequency;
			index = i;
		}
 
		i++;
	}
 
	document.write( "so lan :" + max +"</br>" + "so" + a[index] );
 
