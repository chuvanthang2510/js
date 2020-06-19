var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
function chuanHoa(str)
{
    str = str.toLowerCase();
    var newStr = str.replace(str.charAt(0),str.charAt(0).toUpperCase());
    return newStr;
}
var  d = "do ba hoan";
var e = d.replace(d.charAt(0),d.charAt(0).toUpperCase())
console.log(typeof e,e,d)
var newStudents = students.map((stu) => {
    var newStu = {...stu};
    newStu.lastName = chuanHoa(newStu.lastName)
    newStu.firstName = chuanHoa(newStu.firstName)
    return newStu;

})
console.log(newStudents)
var findStudents = newStudents.filter((stu) => {
    if(stu.firstName.length >=3 && (stu.firstName.includes("a") || stu.firstName.includes("A") ))
        return true;
    return false;
})
console.log(findStudents)