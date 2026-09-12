"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WhoType;
(function (WhoType) {
    WhoType["student"] = "student";
    WhoType["teacher"] = "teacher";
    WhoType["management"] = "management";
    WhoType["labStaff"] = "labStaff";
})(WhoType || (WhoType = {}));
var who = WhoType.teacher;
who = WhoType.labStaff;
console.log(WhoType.student);
var Fruit;
(function (Fruit) {
    Fruit["a"] = "Apple";
    Fruit["b"] = "banana";
    Fruit["c"] = "cherry";
})(Fruit || (Fruit = {}));
var myFruit = Fruit.a;
myFruit = Fruit.c;
console.log(myFruit);
// ---------value not assign result index---------
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["manager"] = 1] = "manager";
    Role[Role["qa"] = 2] = "qa";
    Role[Role["developer"] = 3] = "developer";
    Role[Role["user"] = 4] = "user";
})(Role || (Role = {}));
var userRole = Role.admin;
console.log(userRole);
//# sourceMappingURL=enum.js.map