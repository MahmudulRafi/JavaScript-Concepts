// Spread Operator

var array = [1, 2, 3, 4, 'Rafi'];

var array2 = [...array, 'Rafat'];   // Can implement previous data as reference in new array.

var array3 = [...array];            // It can stop editing the array from the core.

array3.push(10);

console.log(array);

var newArray = [...array2, ...array3];  // It can concate arrays.

console.log(newArray);
