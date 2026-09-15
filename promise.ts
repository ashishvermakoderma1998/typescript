// function test1(){
//    setTimeout(() => {
//      console.log("test1")
//    }, 3000);
// }

// function test2(){
//     console.log("test2")
// }

// test1();
// test2();

// --------promise--------
type resultType={
    name:string,
    id:number,
    email:string
}


function complexLogic():Promise<resultType>{
    return new Promise((resolved )=>{
        setTimeout(()=> {
            resolved({
                name:"Ashish",
                id:200,
                email:"ashish@gmail"
            })
        },3000)
    })
}

complexLogic().then((data:resultType)=>{
    console.log(data);
    test2()
})
function test2(){
    console.log("test2");
}