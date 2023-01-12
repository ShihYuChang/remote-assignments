
// Create a varible for the total discounted price for all products and set it to zero initailly.
var totalPrice = 0;

// Create the function 'calculate' to generate the totalPrice
function calculate(data) {
    for ( let i = 0; i < data.products.length; i++ ) {
        var productPrice = data.products[i].price;
        var productDiscount = data.discount;
        var finalPrice = productPrice * productDiscount;
        totalPrice += finalPrice;                
    }
    return totalPrice;
}


// Create a variable to store the object of product names and prices
const productList = {
    discount: 0.1,
    products: [
    {
    name: "Product 1",
    price: 100
    },
    {
    name: "Product 2",
    price: 700
    },
    {
    name: "Product 3",
    price: 250
    }
    ]
}

console.log(calculate(productList));