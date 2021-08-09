// Function 

function sayName(name) {
    console.log(name);
}

function calculateSum(firstNumber, secondNumber) {
    total = firstNumber + secondNumber;
    console.log(total);
}

sayName("Mahmudul Hasan Rafi");
calculateSum(20, 30);

// Anonymous Function 

(function (studentId) {
    console.log(studentId);
})("C12345");

// Arrow Function

spiltMyName = (myName) => {
    return myName;
}

spiltMyName("R A F I");

// Function Expression

var universityName = function displayUniversityName(myUniversityName) {
    return myUniversityName;
}

console.log(universityName("IIUC"));

// Higher Order Function or First Class Function

function higherOrderFunction(spiltMyName) {
    return spiltMyName;             // Here spiltMyName function passes as parameter and returend as parameter.
}

console.log(higherOrderFunction("R A F I"));