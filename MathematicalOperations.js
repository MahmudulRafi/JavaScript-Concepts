// Mathematical Operations in JavaScript

var productPrice1 = 2350;
var productPrice2 = 1250;

var summation = productPrice1 + productPrice2;
var subtract = productPrice1 - productPrice2;
var multiply = productPrice1 * productPrice2;
var divide = productPrice1 / productPrice2;
var reminder = productPrice1 % productPrice2;

console.log("Summation : ", summation);
console.log("Subtract : ", subtract);
console.log("Multiply : ", multiply);
console.log("Divide : ", divide);
console.log("Reminder : ", reminder);

// Absolute Value

var number = -500;
var absoluteValue = Math.abs(number);
console.log(absoluteValue);

// Round Value 

number = 5.234;
var roundValue = Math.round(number);
console.log(roundValue);

// Celing Value

number = 9.099;
var celingValue = Math.ceil(number);
console.log(celingValue);

// Floor Value

number = 8.99;
var floorValue = Math.floor(number);
console.log(floorValue);

// Random Value

var randomNumber = Math.random() * 50;
console.log(Math.round(randomNumber));