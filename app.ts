// ----------String--------
var userName: string = "Ashish Kumar";
var college:string ="ITI Koderma";
console.log(college);
console.log(userName);

// -----------Number----------
var age:number  = 25;
console.log(age);

// -------array----------
var studentNames:string[] = ["Ashish", "Rohit", "Ramesh"];
console.log(studentNames);
var numArray:number[] = [1,2,3,4,5];
console.log(numArray);

// --------tuple----------
var person: [string, number] = ["Ashish", 28]
console.log(person);

// ---------object-----------
let studentData: {name: string; age: number; college: string} = {name: "Vikash", age: 25, college: "Vbu"};
console.log(studentData);

// ----------special data types----------
// --------any----------
let data: any = "Ashish Kumar";
console.log(data);

// --------unknown----------
let input: unknown = "Hello World";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}

// ---------void----------
function logMessage(): void {
    console.log("this function does not return anything");
}
// ----------never----------
function throwError(message: string): never {
    throw new Error(message);
}

// --------advaced data types(union, intersection, type alias, enum, literal type)---------
// --------union----------
var gmail:number|string = 10;
console.log(gmail);

// ---------intersection Type--------
type Employee = {name: string};
type Manager = {department: string};
type TeamLead = Employee & Manager;
let lead: TeamLead= {name:"Ashish",department: "Engineering"};
console.log(lead);

// ---------type alias----------
type Id = string | number;
let userId: Id = "ashish1998";
console.log(userId);

// --------enum-----------
enum Role {
    Admin,
    User, 
    Guest
}
let userRole: Role= Role.Admin;
console.log(Role[userRole]); 

// --------Literal Type--------
let direction: "up"| "down";
direction = "up";
console.log(direction);