function chuanHoa(str)
{
    str = str.trim();
    
    return str.replace(/\s+/g," ");
}
console.log("   computer =             ngan 98     AND class = "  + "<br/>")
console.log(chuanHoa("   Mai Ben        Nhau ban      NhO"))