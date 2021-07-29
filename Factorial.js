
// Factorial With For Loop

function findFactorialWithFor(number1) {
    let factorial1 = 1;
    for (let i = 1; i <= number1; i++) {
        factorial1 = factorial1 * i;
    }
    return factorial1;
}

console.log(findFactorialWithFor(10));

// Factorial With While Loop

function findFactorialWithWhile(number2) {
    let factorial2 = 1;
    let j = 1;
    while (j <= number2) {
        factorial2 = factorial2 * j;
        j++;
    }
    return factorial2;
}

console.log(findFactorialWithWhile(10));

// Factorial With Recursive Function

function findFactorialWithRecursion(number3) {
    if (number3 == 0) {
        return 1;
    }
    else {
        return findFactorialWithRecursion(number3 - 1) * number3;  // n! = (n - 1)! * n
    }                                                              // 8! = (8 - 1)! * 8
}

console.log(findFactorialWithRecursion(10));