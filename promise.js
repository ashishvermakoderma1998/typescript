"use strict";
// function test1(){
//    setTimeout(() => {
//      console.log("test1")
//    }, 3000);
// }
function complexLogic() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved({
                name: "Ashish",
                id: 200,
                email: "ashish@gmail"
            });
        }, 3000);
    });
}
complexLogic().then((data) => {
    console.log(data);
    test2();
});
function test2() {
    console.log("test2");
}
