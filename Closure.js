// Closure

let fileName = "Closure";

function parentFunction() {

    let firstName = 'Mahmudul';
    let secondName = 'Hasan';
    let lastName = 'Rafi';
    let studentId = 'C*****';
    let paymentConfirmed = 25000;

    function childFunctionOne() {
        console.log(fileName);
        console.log(firstName);
    }

    function childFunctionTwo() {
        console.log(fileName);
        console.log(secondName);
    }

    function childFunctionThree() {
        console.log(fileName);
        console.log(lastName);
    }

    function payment() {
        console.log(paymentConfirmed);
        console.log(firstName + " " + secondName + " " + lastName);
    }

    return payment;
}

var myVariable = parentFunction();
myVariable();