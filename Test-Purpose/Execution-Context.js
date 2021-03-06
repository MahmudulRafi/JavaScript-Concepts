let universityName = "IIUC";

function one() {
    let studentName = "Rafi";
    console.log(universityName);

    function two() {
        let studentId = "C10000";
        console.log(studentName);
        console.log(universityName);

        function three() {
            let deptName = "CSE";
            console.log(studentName);     // Closure
            console.log(studentId);       // Closure
            console.log(deptName);        // Laxical Scope
            console.log(universityName);  // Global Scope 
        }
        return three;
    }
    return two;
}

let myFunction1 = one();           // myFunction1 == two();
let myFunction2 = myFunction1();   // myFunction2 == three();
myFunction2();


/*
output-

IIUC
Rafi
IIUC
Rafi
C163025
CSE
IIUC

*/

// Closure(one) : studentName = 'Rafi';
// Closure(two) : studentId = 'C10000';
