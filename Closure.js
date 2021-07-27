// Closure
let fileName = "Closure";

function parentFunction() {

    let firstName = 'Mahmudul';
    let secondName = 'Hasan';
    let lastName = 'Rafi';
    let studentId = 'C*****';

    return childFunctionThree;

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
}

parentFunction()();