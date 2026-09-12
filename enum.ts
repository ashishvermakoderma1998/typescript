enum WhoType{
    student="student",
    teacher="teacher",
    management="management",
    labStaff="labStaff"
}

var who:WhoType=WhoType.teacher;
who= WhoType.labStaff;
console.log(WhoType.student);

enum Fruit{
    a="Apple",
    b="banana",
    c="cherry"
}

var myFruit:Fruit=Fruit.a;

myFruit=Fruit.c;

console.log(myFruit);
// ---------value not assign result index---------
enum Role{
admin,
manager,
qa,
developer,
user
}

var userRole:Role=Role.admin;
console.log(userRole);