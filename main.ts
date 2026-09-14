import { Auth } from "./inheritance.js";

interface userInfotype{
    name:string,
    age:number,
    email:string,
    password:string

}
var userInfo:userInfotype={
    name:'anil',
    age:30,
    email:'ashish@gmail.com',
    password:'1234@abc'
}


class user extends Auth{

}
var user1 = new user();
user1.login(userInfo.name,userInfo.password);
console.log(userInfo);


