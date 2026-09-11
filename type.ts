
type DataType={name:string,email:string};

// ---------extend  ke liye kewal interface use kr interface pe union nahi laga sakte hai ---------
e
interface a {name:string};
interface b extends a {email:string};

// -----------union ke liye type use kre or type pe extend kam nahi krta hai--------
type c = {name:string};
type d = {email:string};
type e = c | d;

var empData:DataType={
    name:'Ashi',
    email:"ashish@gmail.com"
}

var studentDatas:DataType={
    name:"Suraj",
    email:"suraj@gmail.com"
}