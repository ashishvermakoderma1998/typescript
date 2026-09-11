function fruits():string{
return "Apple"
}

function num():number{
return 20
}

function simple():boolean{
    return true
}

function complex():number|string|boolean{
    let name="Ashish";
    let data=10;
    let type="age";
    if(type=='age'){
        return data;
    } else{
        return name
    }

}

function anything():any{
    return 
}
