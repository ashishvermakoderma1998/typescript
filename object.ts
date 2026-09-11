var userData:{
    name:string,
    age:number,
    company:string,
    role:string|undefined
}={
        name:'Ashish',
        age:29,
        company:'tcs',
        role:undefined
    }
    userData.role="Admin";
    userData.name='vikash';
    console.log(userData);


var collData:{
    [key:string]:string|number|undefined
}={
    name:'Shivam',
    age:30,
    college:undefined
}
collData.college='vbu';
collData.city="Koderma";
console.log(collData);

// --------nested object---------
var heroData:{
    name:string,
    age:number,
    company:string,
    address:{
        houseNo:string,
            sector:string,
            city:string
    }
}={
        name:'Ashish',
        age:29,
        company:'tcs',
        address:{
            houseNo:'house no 50',
            sector:"50",
            city:'Koderma'
        }
    }

    console.log(heroData);