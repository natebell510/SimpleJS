//exporting module
console.log('exporting module');
//all variable are private
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} was added to cart`);
};

const totalPrice = 2.37;
const totalQuantity = 23;

export{totalPrice, totalQuantity};


//nameless function
export default function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} was added to cart`);
};
