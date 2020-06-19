// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”
function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(Word) {
            return Word[0].toUpperCase() + Word.substr(1);
        })
        .join(' ');
     }
     alert(toUpper("NguyeN THI tho tHu hA"))