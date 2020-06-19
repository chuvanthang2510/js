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
Output: [{
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
 }]

 var newStudents = students.filter((stu) => {
     if(stu.lastName.match(/^Do/))
        return true
    return false
 })
 console.log(newStudents)