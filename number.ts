// var var_name : data_type =value
var num1:number= 10;
var num2:number= 30;

var total:number = num1+num2;
console.log(total);


var oct:number= 0o100001;
var hexa:number= 0x00001;
var binary:number= 0b00001;
console.log(oct+10);

var item:number=100;
var item2="50";
// var item2converted= Number(item2);
// var item2converted =+item2;

console.log(item+ +item2);

// -------type inference with number-----------
var data: number | string = 30;
data = 40;
data = "ashish"


