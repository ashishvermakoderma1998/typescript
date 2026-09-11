var studentData:string|number|[] ="Anil";
studentData=999;
studentData=[];

function fruitsData():string|string[]|number {
    var item= 5;
    if(item>1){
        return ['apple','banana','orange']
    }else{
        return "coconut"
    }

    
}
console.log(fruitsData());


function studentInfo(name:string|number|boolean) {
    
    if(typeof name == "string"){
    return "student name is " + name
    }

     if(typeof name == "number"){
    return "student age is " + name
    }
    

}
console.log(studentInfo("Ashish"));

