function totalPrice(){
    var price = 100;
    var item = 50;
    console.log(price*item)
}
totalPrice();

function newPrice(item:number, price:number,text?:string){
   var price =100;
    if(text){
    console.log(text+price*item)
    }else{
        console.log(price*item)
    }
    
}
newPrice(12,44, "total price is ");
newPrice(16,55,"total amount is ");
newPrice(55,22);

function simple(data:string|number|boolean){
console.log(data)
}

simple("Ashish");
simple(100);
simple(true);