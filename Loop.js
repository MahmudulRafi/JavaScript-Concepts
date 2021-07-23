// While loop

var number = 0;

while (number <= 15) {
    console.log(number);
    number++;
}

// For Loop

var numberArray = [10, 20, 30, 40, 50, 60, 70];

for (var i = 0; i <= numberArray.length; i++) {
    console.log(numberArray[i]);
}

// Foreach Loop

numberArray.forEach((number, index) => {
    console.log("Index : " + index + " Value : " + number);
});