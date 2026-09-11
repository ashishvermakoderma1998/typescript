// --------intersection--------
type personTA={name:string};
type personTB={age:number};
type personTC=personTA & personTB;

// --------interface----------
// interface personTA{name:string};
// interface personTB{age:number}
// type personTC = personTa & personTB

var personDataA:personTA = {name:'Ashish'};
var personDataB:personTB = {age:39};



var personDataC:personTC={name:'Suraj',age:30}