// print yes if V
let string = "DaVinci" // 
let hasV = false;

for (let i = 0; i < string.length; i++) {

    if (string[i] === "V") {
        hasV = true;
    }
}

if (hasV === true) {
    console.log("yes");
}
// // Given two arrays of integers. Add up each element in the same position and
// // create a new array containing the sum of each pair. Assume both arrays are of the same length.
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let sumArray = [];

for (let i = 0; i < arr_3.length; i++) {

    let sum = arr_3[i] + arr_4[i]
    sumArray.push(sum);

}
console.log(sumArray);

// Exercise 6)
// Check if a string contains the letter “n”. Print “yes” if it does and “no” if it does not.

let str2 = "do’t kow why";
let hasN = false;

for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "n") {
        hasN = true;
    }

}
if (hasN === true) {
    console.log("Yes")

}
else {
    console.log("no")
}

// // Exercise 9)
// // Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// // Palindrome: a word, phrase, or sequence that reads the same backward as
// // forward, e.g., madam or nurses run.

let str3 = "racecar";
let str4 = "aaava";


for (let i = 0; i < str3.length; i++) {
    if (str3[i] !== str3[str3.length - i - 1]) {

        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);


for (let i = 0; i < str4.length; i++) {
    if (str4[i] !== str4[str4.length - i - 1]) {

        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);

function isPalindrome(str) {
    let isPalindrome = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {

            isPalindrome = false;

            break;
        }
    }
    return isPalindrome;
}

console.log(isPalindrome("racecar"));


// // Exercise 7)
// // Given a number n Calculate the factorial of the number
let n = 5;// 5*4*3*2*1
let factorial = 1;

for (let i = 5; i > 0; i--) {
    factorial = factorial * i;
}
console.log(factorial);

// // Exercise 8)

// // Write a program that will allow someone to guess a four digit pin exactly 4 times. If the user guesses the number correctly. It prints “That was
// // correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt or if they got it right.
// const prompt = require('prompt-sync')({ sigint: true });
// const pin = "8907";

let input = prompt("Enter Pin:")

for (let i = 0; i < 4; i++) {

    if (input === pin) {
        console.log("that was correct");
        break;
    }
    else {
        console.log("Sorry, that was wrong try again");
        input = prompt("Enter Pinnnn:");
    }

}

// Exercise 10)

// // Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
let num = 8;
let sum = 0;

for (let i = 1; i <= num; i++) {

    sum = sum + i;
}

console.log(sum);








