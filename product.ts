class Product {
    name:string;
    price:number;
    pId:number;
    inCart=false;
    isOrdered=false;

constructor(name:string,price:number,pId:number){
    this.name=name;
    this.price=price;
    this.pId=pId
}

addToCart():void{
    this.inCart=true
}

buyProduct(){
    if(this.inCart){
        return `product ${this.name} is ordered in ${this.price}`
    }else{
        return `no product in cart`
    }
}
}

var product = new Product("vivo",15000,101);
product.addToCart();
console.log(product.buyProduct());

var product = new Product("Iphone",50000,102);
product.addToCart();
console.log(product.buyProduct());