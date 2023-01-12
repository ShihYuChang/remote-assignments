// Create a object to store all the projects and their discounted price.
var finalProductList = {};

// Create a function to generate the discounted price
function calculate(data) {
    for ( let i = 0; i < data.products.length; i++ ) {
        var productPrice = data.products[i].price;
        var productDiscount = data.discount;
        
        var finalPrice = productPrice * productDiscount;
        //store the products and thier discounted price to the fianlProductList object.
        finalProductList += `
        ${productList.products[i].name}: ${finalPrice}
        `; 
    }
    return finalProductList;
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

// Create a string to show the products and their discounted price.
console.log(calculate(productList));