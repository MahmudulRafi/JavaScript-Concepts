// Array, IndexOf, Set by Index, Push, Pop, Length

var numberList = [14, 11, 15, 20, 10];

numberList[1] = 25;
numberList.push(23);     // Push an element in array
numberList.pop();        // Pop an element from array
numberList.unshift(8);   // Add an element in begaining of the array
numberList.shift();      // Remove an element from begaining of the array

console.log(numberList);
console.log(numberList.length);

var position = numberList.indexOf(10);
console.log(position);

var nameList = ['Fuad', 'Muhaimin', 'Muntasir', "Foysal"];

nameList.unshift('Rafi', 'Rafat');
nameList.shift();

console.log(nameList);