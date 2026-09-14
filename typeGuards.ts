let userData20:number|string|boolean="Ashish";
userData20=true;
if(typeof userData20 == "boolean"){
    console.log("this is a boolean data type")
}
else if(typeof userData20 == "string"){
    console.log("this is a string data type")
}

else{
    console.log("this is a number data type")
}

function checkDataType(data:string | number){
if(typeof data =='number'){
    console.log("this is a number data type")
}else{
    console.log("this is string")
}
}
checkDataType("Ashish");

class Product21 {

}

var p1 = new Product21();


class Order21{
    
    
}
var o1 = new Order21();

function checkDetails(data:Order21 | Product21){
    if(data instanceof Order21){
        console.log("this is a order")
    }else{
        console.log("this is a product")
    }
}
checkDetails(o1);

// ---------create interface----------
interface userData{
    name:string,
    city:string
}

interface userInfo{
    id:number,
    email:String
}

var userData22:userData | userInfo
userData22={
    name:"Ashish",
    city:"Koderma"
}

var userData21:userData | userInfo={
    id:100,
    email:""
}
function checkUserInfo(data:userData|userInfo){
if ((data as userData).name!=undefined){
    console.log("this is the user Data")
}else{
    console.log("this is the user info")
}
}
checkUserInfo(userData22)

