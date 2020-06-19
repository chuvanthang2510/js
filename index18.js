function search(s1,s2)
{
    if(s1.includes(s2))
        {
            var i = s1.lastIndexOf(s2);
            var s1_2 = s1.substring(0,i);
            if(s1_2.includes(s2))
                return s1_2.lastIndexOf(s2);
            else return i;
        }
    else return -1;
}

document.write(search("hi hi hi hi hi","hi"))