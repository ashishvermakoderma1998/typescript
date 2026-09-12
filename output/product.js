"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered in ${this.price}`;
        }
        else {
            return `no product in cart`;
        }
    }
}
var product = new Product("samsung", 10000, 101);
product.addToCart();
console.log(product.buyProduct());
var product = new Product("Iphone", 50000, 104);
product.addToCart();
console.log(product.buyProduct());
//# sourceMappingURL=product.js.map