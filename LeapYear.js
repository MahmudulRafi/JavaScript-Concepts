// Check whether year is leap year or not.

let year;

function leapYearCheck(year) {

    if (year % 4 == 0 || year % 400 == 0) {
        if (year % 100 != 0) {
            console.log(year + " is Leap Year.");
        } else {
            console.log(year + " is not Leap Year.");
        }
    }
    else {
        console.log(year + " is not Leap Year.");
    }

}

leapYearCheck(1700);
