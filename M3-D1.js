/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const trippleOrSum = (a, b) => {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
};
console.log(trippleOrSum(5, 5));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const higherThanFifty = (x, y) => {
  if (x === 50 || y === 50 || x + y === 50) {
    return true;
  } else return false;
};
console.log(higherThanFifty(10, 30));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = (string, position) => {
  const stringArray = string.split(``);
  //   stringArray.splice(position, 1);
  delete stringArray[position];
  console.log(stringArray);
  return `Result: ${stringArray.join(``)}`;
};
console.log(removeChar(`I am a string`, 5));

/*
4)
 Create a function to find the largest of three given integers.
*/

const largestInteger = (x, y, z) => {
  return Math.max(x, y, z);
};

console.log(largestInteger(3, 1, 5));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const range = (x, y) => {
  if (
    (x >= 40 && x <= 60) ||
    (x >= 70 && x <= 100 && y >= 40 && y <= 60) ||
    (y >= 70 && y <= 100)
  ) {
    return true;
  } else return false;
};

console.log(range(50, 40));

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const strCopy = (string, copies) => {
  const myArray = [];
  for (i = 0; i < copies; i++) {
    myArray.push(string.slice());
  }
  const newString = myArray.join(` `);
  return newString;
};

console.log(strCopy(`bab ee`, 3));

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

11)

Create a function to find the longest string from a given array of strings.

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

// FIND THE BUG!!!!!!!!!
// const getMovieById = function (id) {
//   for (let i = 0; i < movies.length; i++) {
//     console.log("ID: ", id);
//     if (id === movies[i].imdbID) {
//       return movies[i];
//     } else {
//       return {};
//     }
//   }
// };
// console.log(getMovieById("tt4154796"));
