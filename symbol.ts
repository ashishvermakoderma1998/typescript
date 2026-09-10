var sym = Symbol();
var sym2 = Symbol();

var sym3= Symbol("abc");
var sym4= Symbol("abc");
console.log(sym3==sym4);

console.log(sym==sym2);


const dId =Symbol('id');
const obj= {
    [dId]:100,
    name:'ashish'
}
console.log(obj[dId]);