"use strict";
class CollegeData {
    name;
    constructor(cName) {
        this.name = cName;
    }
    displayTeacherName() {
        console.log("ashish", "vikash", "sidharth");
    }
    getStudentList() {
        return ["Ashish", "Sonu", "sakshi"];
    }
}
var college1 = new CollegeData("IIT Delhi");
console.log(college1.displayTeacherName());
console.log(college1.getStudentList());
