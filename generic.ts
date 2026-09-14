function fruits<T>(name:T):T{
return name
}

// ---------when you use any data type any----------
let onlyFruit=fruits("Mango");
let onlyNum=fruits(199);
let onlyBool=fruits(true);

function fruitsAny(name:any):any{
return name
}
let onlyFruitAny=fruitsAny("Mango");
let onlyNumAny=fruitsAny(199);
let onlyBoolAny=fruitsAny(true);

// ---------function----------
function user17 <T>(data:T[]):T{
return data[1]
}

let userCollection = user17(["Ashish","Vikash"])

console.log(userCollection)



