
type PersonT={
    name:string,
    age:number,
    isEmp:boolean,
}
let PersonData:PersonT={
    name:"Ashish Verma",
    age:28,
    isEmp:true
}
type PersonX = keyof PersonT;

let PersonDatax:PersonT;
PersonData.name

console.log(PersonData.name);
console.log(PersonData.age);