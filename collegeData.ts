interface CollegeDataType{
    name:string;
    displayTeacherName():void;
    getStudentList():string[]
}

class CollegeData implements CollegeDataType {
    name:string;
    constructor(cName:string){
        this.name=cName
    }
    displayTeacherName(): void {
        console.log("ashish","vikash","sidharth")
    }

    getStudentList(): string[] {
        return["Ashish", "Sonu","sakshi"]
    }
}

var college1 = new CollegeData("IIT Delhi")


console.log(college1.displayTeacherName());
console.log(college1.getStudentList());