// ### Question 1: Sum of an Array
// *Instructions:*
// 1. Write a function named sumArray that takes an array of numbers as input.
// 2. The function should return the sum of all numbers in the array.
// 3. Ensure your function works correctly by testing it with different inputs.
 

// *Example:*
// - Input: [1, 2, 3, 4, 5]
// - Output: 15;

// 1:
function sumArray(arr:number[]){
    let sum = 0;
    for(let i = 0;i < arr.length; i++){
        sum += arr[i]; 
    }
    return sum;
}

console.log(sumArray([1,2,3,4,5]));//15
console.log(sumArray([4,5,6,8,9]));//32


//### Question 2: Reverse a String
//*Instructions:*

// Write a function named reverseString that takes a string as input.
// The function should return the reversed version of the input string.
// Ensure your function works correctly by testing it with different inputs.
// Example:

// Input: "hello"
// Output: "olleh"

// 2:
function reverseString(name:string){
    let a = name.split('');
    a.reverse();
    let b = a.join('');
    return b
}
console.log(reverseString('hello'));//olleh
console.log(reverseString('john'));//nhoj  


function reverseString1(name1){
return name1.split("").reverse().join("")
}
console.log(reverseString("hello"));
