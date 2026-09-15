"use strict";
// ---------partial element no error---------
let CollegeData3 = {
    name: "IIT Delhi",
    location: "Delhi",
};
function getCollegeData(data) {
    return data;
}
getCollegeData({ name: "IIT Mumbai", location: "Kolkata" });
// ------------required-----------
function getCollegeData2(data) {
    return data;
}
getCollegeData2({ name: "IIT Mumbai", location: "Kolkata", students: 30, branch: 3 });
// -----------readonly-----------
var CollegeData4 = {
    name: "iit delhi",
    location: "delhi",
    students: 400,
    branch: 5
};
console.log(CollegeData4.branch);
// --------can not re assign--------
// CollegeData4.name="iit delhi "
// --------pick------------
// ------jo pick krenge wahi kewal rahega-------
var CollegeData5 = {
    name: "iit delhi",
    location: "delhi",
};
console.log(CollegeData5.name);
// ------------omit-----------
var CollegeData7 = {
    name: "iit delhi",
    location: "delhi",
};
var APICall = "success";
APICall = "loading";
APICall = "success";
// -----------extract----------
var APICall2;
APICall2 = "error";
var randomData = "Hello";
var siteRoleOption = "Admin";
var RoleName = {
    Admin: "Ashish Verma",
    user: "Anil",
    guest: "vikash"
};
console.log(RoleName.user);
