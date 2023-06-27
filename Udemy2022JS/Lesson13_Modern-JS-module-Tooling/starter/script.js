//import {addToCart, totalPrice as price, totalQuantity} from './shoppinCart.js';
/*
//importing module

//exporting is executed first, then import
//all modules are executed in strict mode by default
//exports: named and default
addToCart('bread', 5);

console.log(totalQuantity, totalPrice);
 */

//module export is like public API
console.log('importing module');

/*
import * as ShoppingCart from './shoppinCart.js';
ShoppingCart.addToCart('water',4);
console.log(ShoppingCart.totalPrice);
 */

import add, {cart} from './shoppinCart.js';
add('pizza',2);
add('apple',10);
console.log(cart); //this is not a copy of export value, but it is a live connection



//https://www.youtube.com/watch?v=B7TTlTHNU5U&list=PLEcZUKhPzlA2ZcVaNJdbWqzuJPIKGbeVA&index=35&ab_channel=ViralKingz 6.58