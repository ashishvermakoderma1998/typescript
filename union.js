"use strict";
var studentData = "Anil";
studentData = 999;
studentData = [];
function fruitsData() {
    var item = 5;
    if (item > 1) {
        return ['apple', 'banana', 'orange'];
    }
    else {
        return "coconut";
    }
}
console.log(fruitsData());
function studentInfo(name) {
    if (typeof name == "string") {
        return "student name is " + name;
    }
    if (typeof name == "number") {
        return "student age is " + name;
    }
}
console.log(studentInfo("Ashish"));
