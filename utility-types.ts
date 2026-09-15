// ---------utility types------------
// ----partial,required,readonly,pick,omit,exclude,extract,nanNullable,record-----
interface CollegeType{
    name:string,
    location:string,
    students:number,
    branch?:number
}
// ---------partial element no error---------
let CollegeData3:Partial<CollegeType>={
    name:"IIT Delhi",
    location:"Delhi",
}

function getCollegeData(data:Partial<CollegeType>){
return data
}

getCollegeData({name:"IIT Mumbai", location:"Kolkata"})

// ------------required-----------
function getCollegeData2(data:Required<CollegeType>){
return data
}

getCollegeData2({name:"IIT Mumbai", location:"Kolkata",students:30,branch:3});

// -----------readonly-----------
var  CollegeData4:Readonly<CollegeType>={
    name:"iit delhi",
    location:"delhi",
    students:400,
    branch:5
}
console.log(CollegeData4.branch)

// --------can not re assign--------
// CollegeData4.name="iit delhi "

// --------pick------------
// ------jo pick krenge wahi kewal rahega-------
var  CollegeData5:Pick<CollegeType,'name'|'location'>={
    name:"iit delhi",
    location:"delhi",
    
}

console.log(CollegeData5.name)

// ------------omit-----------
var CollegeData7:Omit<CollegeType,'branch' | 'students'>={
    name:"iit delhi",
    location:"delhi",
    
}
// ---------exclude----------

type APIStatus="loading" | "error" | "pending" | "success";
var APICall:Exclude<APIStatus,"pending">="success";
APICall="loading";
APICall="success";

// -----------extract----------
var APICall2:Extract<APIStatus,"error" | "success">;
APICall2="error";

// -----------nanNullable-------------
// -----------null or undefined nahi hona chahiye---------
type RandomType=string | number | undefined | null | string[];
var randomData:NonNullable<RandomType>="Hello";

// -------------record------------
type SiteRole="Admin" | "user" | "guest";
var siteRoleOption:SiteRole="Admin";
var RoleName:Record<SiteRole,string>={
    Admin:"Ashish Verma",
    user:"Anil",
    guest:"vikash"
}

console.log(RoleName.user);