//Q24:More Conditional Tests:You don't have to limit the number of tests you create to 10.If you want to try more comparisons,write more tests.Have at least one True and one False result for each of the following:
//.Tests for equality and inequality with strings.
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

//.Tests for equality and inequality with strings.
let string1: string = "Hello";
let string2: string = "Hello";

if (string1 === string2){
    console.log("Strings are equal")
}
else{
    console.log("Strings are not equal")
}

let string3:string = "Hello"
let string4:string = "Hi"

if (string3 === string4){

    console.log("Strings are equal")
}
else{
    console.log("Strings are not equal")
}
//.Tests using the lowercase function.
let strings:string = "WORLD"

 let lowercaseString:string = strings.toLowerCase();
console.log(lowercaseString)

//.Numerical tests inolving equality and unequality,greater than and less than,greater than or equal to 

let number1:number = 10;
let number2:number = 5;

//Equality 
console.log(number1 === number2)

//UnEquality
console.log(number1 !== number2)

//Greater than
console.log(number1 > number2)

//Less than
console.log(number1 < number2)

//Greater than or equal to
console.log(number1 >= number2)

//Less than equal to
console.log(number1 <= number2)

//.Tests using "and" and "or" operators
let num:number = 10;
let numb:number = 5;
let numb2:number = 7;

console.log(num > numb && num > numb2)


console.log(num > numb || num > numb2)

//.Tests wheather an item is an in array

let array:string[] = ["Apple","Grapes","Cherry","Orange"]

console.log(array[5])

//.Tests wheather an item is not in array

console.log(!(3 in array)); // false
console.log(!(6 in array)); // true
