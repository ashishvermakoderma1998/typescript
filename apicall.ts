
type APIType={
    userId:string,
    id:number,
    title:string,
    complete:boolean

}

async function apiCallHandling():Promise<APIType>{
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await result.json();
    // console.log(data);
    return data
    
}
apiCallHandling().then((data:APIType)=>{
    console.log(data);
})

