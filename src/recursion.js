/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

var sum = function(array) {
  var copy = array.slice()
  var total = 0;
  if (copy.length === 0) {
    return 0;
  }

  total += copy.shift() + sum(copy);
  return total;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

  var total = 0;

  if (array.length === 0) {
    return 0;
  }

  if (!Array.isArray(array)) {
    return array;
  };
  var copy = array.slice();

  while (typeof copy[0] === 'number') {
    total += copy.shift();
  }

  for (var subArr of copy) {
    total += arraySum(subArr);
  }

  return total;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

  var isNegative = false;

  if (n < 0) {
    n = Math.abs(n);
    isNegative = true;
  }

  if (n === 0) {
    return 0;
  }

  if (isNegative) {
    return -((n - 1) + sumBelow(n - 1));
  }

  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {

  if (Math.abs(x - y) <= 1 || x === undefined || y === undefined) {
    return [];
  }

  if ( x > y) {
    if ((x - y) === 2) {
      return x - 1;
    }

    var rangeArr = [x - 1];
    rangeArr = rangeArr.concat(range(x - 1, y));
    return rangeArr;
  }

  if ((y - x) === 2) {
    return x + 1;
  }

  var rangeArr = [x + 1];
  rangeArr = rangeArr.concat(range(x + 1, y));
  return rangeArr;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  if (exp === 0) {
    return 1;
  }

  if (exp === 1) {
    return base;
  }

  if (exp < 0) {
    exp = 0 - exp;
    return 1 / (base * exponent(base, exp - 1));
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

  if (n === 1) {
    return true;
  }

  if (n === 2 && n >= 2) {
    return true;
  }

  if (n < 2) {
    return false;
  }

  return powerOfTwo(n / 2);

};

// 9. Write a function that reverses a string.
var reverse = function(string) {

  var reversed = '';
  if (string.length === 1) {
    return string;
  }
  reversed += string[string.length - 1];
  string = string.substring(0, string.length - 1);
  return reversed += reverse(string);

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

  string = string.toLowerCase().split(' ').join(' ');

  if (string.length === 0 || string.length === 1) {
    return true;
  }

  if (string.length === 2 && string[0] === string[string.length - 1]) {
    return true;
  } else if (string[0] !== string[string.length - 1]) {
    return false;
  }

  string = string.substring(1, string.length - 1);
  return palindrome(string);

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.

var modulo = function(x, y) {

  if (x < 0) {
    var negativeX = true;
    x = 0 - x;
  }

  if (y < 0) {
    y = 0 - y;
  }

  if (y === 0 && x === 0) {
    return NaN;
  }

  if (x === 0) {
    return x;
  }

  if (x < y && negativeX) {
    return -x;
  } else if (x < y) {
    return x;
  }

  if (negativeX) {
    if ((x - y) < y) {
      return -(x - y);
    } else {
      return modulo((x - y), y);
    }
  } else {
    if ((x - y) < y) {
      return (x - y);
    } else {
      return modulo((x - y), y);
    }
  }

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }

  if (x < 0) {
    var xIsNeg = true;
    x = 0 - x;
  }

  if (y < 0) {
    var yIsNeg = true;
    y = 0 - y;
  }

  if (y > x) {
    var placeholder;
    placeholder = y;
    y = x;
    x = placeholder;
  }

  if (y === 1) {
     return x;
  }
  if (!(xIsNeg && yIsNeg) && (xIsNeg || yIsNeg)) {
    return 0 - (x + multiply(x, y-1));
  } else {
    return x + multiply(x, y-1)
  }
};


// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {

  if (str.length === 1) {
    return [str];
  }
  var arr = [];
  for (var char of str) {
    arr = arr.concat(createArray(char));
  }

  return arr;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {

  if (array.length === 1) {
    return array;
  }
  var reversed = [array.pop()];

  reversed = reversed.concat(reverseArr(array));

  return reversed;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {

  if (length === 1) {
    return [value];
  }
  return [value].concat(buildList(value, (length - 1)));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {

  if (n === 1) {
    return ['1'];
  }
  var fizzbuzzArr = [];
  if (n % 15 === 0) {
    fizzbuzzArr.push('FizzBuzz');
  } else if (n % 3 === 0) {
    fizzbuzzArr.push('Fizz');
  } else if (n % 5 === 0) {
    fizzbuzzArr.push('Buzz');
  } else {
    fizzbuzzArr.push(n.toString());
  }

  fizzbuzzArr = fizzBuzz(n-1).concat(fizzbuzzArr)
  return fizzbuzzArr;
  // return fizzBuzz(n-1).concat([word])
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;

  if (array.length === 0) {
    return 0;
  }

  if (array[array.length - 1] === value) {
    count++;
  }

    array.pop()
    count += countOccurrence(array, value);

  return count;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {

  let copy = array.slice();

  if (copy.length === 1) {
    return [callback(copy[0])];
  }

  let element = copy.shift();
  return [callback(element)].concat(rMap(copy, callback));

};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, targetKey) {
  let count = 0;

  if (Object.keys(obj).length === 1 && Object.keys(obj)[0] === targetKey) {
    count++;
    return count;
  }

  for (let key in obj) {
    if (key === targetKey) {
      count++;
    }
    if (typeof obj[key] === 'object') {
      count += countKeysInObj(obj[key], targetKey);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {

  var count = 0;
  if (typeof Object.values(obj)[0] !== 'object' && Object.values(obj)[0] === value) {
    count++;
    return count;
  } else if (typeof Object.values(obj)[0] !== 'object' && Object.values(obj)[0] !== value) {
    return count;
  }

  for (var key in obj) {
    count += countValuesInObj(obj[key], value);
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  if (typeof Object.values(obj)[0] !== 'object' && Object.keys(obj)[0] === oldKey) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
    return obj;
   } else if (typeof Object.values(obj)[0] !== 'object' && Object.keys(obj)[0] !== oldKey) {
    return obj;
  }

  for (var key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[key]
      delete obj[key];
      key = newKey;
    }

    replaceKeysInObj(obj[key], oldKey, newKey)
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
