class Company{
    static name:string="google"
    getName(){
        return "Samsung"
    }
}

var c1= new Company();
// ----static use krne se property object ka part nahi rahta hai-------
// console.log(c1.name);
console.log(Company.name);
console.log(c1.getName());