interface Info {
    
    name:string,
    age:number,
    college:string
}

interface TeacherType extends Info {
    subject:string
}


var studentObj:Info={
    name:'Ashish',
    age:30,
    college:'vbu'
}

var teacherObj:TeacherType={
    name:'vikash',
    age:40,
    college:'j j ',
    subject:"Math"
}