// 16. Viết chương trình lấy  id name của fb.
// VD: “https://www.facebook.com/ngothucdat”, output: “ngothucdat”
function takeId(id)
{
    var flag = id.lastIndexOf("/");
    return id.substring(flag+1);
}
alert("takeId :" + takeId("https://www.facebook.com/ngothucdat"));