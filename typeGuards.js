"use strict";
let userData20 = "Ashish";
userData20 = true;
if (typeof userData20 == "boolean") {
    console.log("this is a boolean data type");
}
else if (typeof userData20 == "string") {
    console.log("this is a string data type");
}
else {
    console.log("this is a number data type");
}
function checkDataType(data) {
    if (typeof data == 'number') {
        console.log("this is a number data type");
    }
    else {
        console.log("this is string");
    }
}
checkDataType("Ashish");
class Product21 {
}
var p1 = new Product21();
class Order21 {
}
var o1 = new Order21();
function checkDetails(data) {
    if (data instanceof Order21) {
        console.log("this is a order");
    }
    else {
        console.log("this is a product");
    }
}
checkDetails(o1);
var userData22;
userData22 = {
    name: "Ashish",
    city: "Koderma"
};
var userData21 = {
    id: 100,
    email: ""
};
function checkUserInfo(data) {
    if (data.name != undefined) {
        console.log("this is the user Data");
    }
    else {
        console.log("this is the user info");
    }
}
checkUserInfo(userData22);
