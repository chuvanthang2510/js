var mang = [1, 2, 3, 4 ,5 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];
function tong_mang(mang)
{
    var tong = 0;
    for (var i = 0; i < mang.length; i++){
            tong += mang[i];
    }
    return tong;
}
document.write("Tổng mang : " + tong_mang(mang));