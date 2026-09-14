class EmpInfo{
    _name:string="Ashish";
    _email:string="ashish"
    get name():string{
        return"Mr " +this._name
    }
    set email(val:string){
        this._email=val+"@gmail.com"
    }
}

var emp1= new EmpInfo();
console.log(emp1.name);
emp1.email="djashish";
console.log(emp1._email);
