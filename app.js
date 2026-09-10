"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------String--------
var userName = "Ashish Kumar";
var college = "ITI Koderma";
console.log(college);
console.log(userName);
// -----------Number----------
var age = 25;
console.log(age);
// -------array----------
var studentNames = ["Ashish", "Rohit", "Ramesh"];
console.log(studentNames);
var numArray = [1, 2, 3, 4, 5];
console.log(numArray);
// --------tuple----------
var person = ["Ashish", 28];
console.log(person);
// ---------object-----------
let studentData = { name: "Vikash", age: 25, college: "Vbu" };
console.log(studentData);
// ----------special data types----------
// --------any----------
let data = "Ashish Kumar";
console.log(data);
// --------unknown----------
let input = "Hello World";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
// ---------void----------
function logMessage() {
    console.log("this function does not return anything");
}
// ----------never----------
function throwError(message) {
    throw new Error(message);
}
// --------advaced data types(union, intersection, type alias, enum, literal type)---------
// --------union----------
var gmail = 10;
console.log(gmail);
let lead = { name: "Ashish", department: "Engineering" };
console.log(lead);
let userId = "ashish1998";
console.log(userId);
// --------enum-----------
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(Role[userRole]);
// --------Literal Type--------
let direction;
direction = "up";
console.log(direction);
//# sourceMappingURL=app.js.map