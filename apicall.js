"use strict";
async function apiCallHandling() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await result.json();
    // console.log(data);
    return data;
}
apiCallHandling().then((data) => {
    console.log(data);
});
