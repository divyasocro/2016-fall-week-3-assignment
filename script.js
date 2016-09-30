/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = []; //this is an array

var product = {
	productname: "champion woman gusto crosstrainer",
	manufacturer: "Nike",
	cost: 100,
	color: "purple",
	instock: false,
};

productList.push(product);

product = {
	productname: "womens pulse XT sport training", 
	manufacturer: "puma",
	cost: 34,
	color: "black",
	instock: true,

};

productList.push(product);

product = {
	productname: "adult suede classic shoe",
	manufacturer: "puma", 
	cost:44,
	color: "red",
	instock: false,

};

productList.push(product);

product = {
	productname: "mens revolution 3",
	manufacturer: "nike",
	cost: 120,
	color: "grey",
	instock: true,
};

productList.push(product);

//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array

console.log(productList);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */

for(var i = 0; i < productList.length; i++){
    if(productList[i].cost < 50) {
    	console.log("I did it!!");
    }
};
	


   //Your code here


/* Step 3
 * What is the average price of all the products?
 */
var sum = 0;
//3.1 first, calculate total price using the for loop again
for(var i = 0; i<productList.length; i++) {
	sum += productList[i].cost;
}
//3.2 then, divide total price by the number of products, using proudctList.length
var average = sum/productList.length;
console.log(average);
console.log(sum);

/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;
    for(var i = 0; i<productList.length; i++) {
    	if(productList[i].cost < p)
    		numOfMatchingProducts = numOfMatchingProducts+1
    } 

  
    return numOfMatchingProducts;
}

console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
