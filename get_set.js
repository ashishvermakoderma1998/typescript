"use strict";
class EmpInfo {
    _name = "Ashish";
    _email = "ashish";
    get name() {
        return "Mr " + this._name;
    }
    set email(val) {
        this._email = val + "@gmail.com";
    }
}
var emp1 = new EmpInfo();
console.log(emp1.name);
emp1.email = "djashish";
console.log(emp1._email);
