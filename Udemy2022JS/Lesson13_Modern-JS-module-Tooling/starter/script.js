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
import {cloneDeep} from "lodash-es";

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


/*
//top level await can be used without declaring function
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
 */
const getLastPost = async function(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    //console.log(data);
     return {title: data.at(-1).title, text: data.at(-1).body};
};
const lastPost = getLastPost();
const lastPost2 = await getLastPost();

//top level await will block module

//iffy
const shoppingCart2 = (function (){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQ = 23;
    const addToCart =  function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} was added to cart`);
    };
    const order =  function (product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} was ordered from warehouse`);
    };
    return{
        addToCart,
        cart,
        totalPrice,
        totalQ
    }
})();
shoppingCart2.addToCart('apple',4);
//closure allows to function to have access to its birthplace


//common JS modules they are used in NODEJS

/*

//export
export.addToCartEx =  function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} was added to cart`);
};

//import
const {addToCartEx} = require('./shoppinCart.js');
 */

//Parcel

//CLI - command line interface
/*
import baseClone from './node_modules/lodash-es/_baseClone.js';
const state = {
    cart : [
        {
            product : 'bread'
        },
        {
            product: 'banana'
        }
    ],
    user : {
        loggedIn : true
    }
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.loggedIn = false;

const deepClone = baseClone(state);

console.log(deepClone);
 */


//skipped babel - it helps to run code in different browsers on different JS versions


//8.44

//https://www.youtube.com/watch?v=B7TTlTHNU5U&list=PLEcZUKhPzlA2ZcVaNJdbWqzuJPIKGbeVA&index=35&ab_channel=ViralKingz