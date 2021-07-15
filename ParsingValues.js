// Parsing Values

var firstNumber = 10;
var secondNumber = 25.35;
var thirdNumber = '30.12';

thirdNumber = parseFloat(thirdNumber);

var total = firstNumber + secondNumber + thirdNumber;
total = total.toFixed(2);

console.log(total);
