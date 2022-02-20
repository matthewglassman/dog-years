//User's current age
let myAge = 43;

//Variable assigned to the number 2 since it figures into the dog's early life
let earlyYears = 2;

//Calculation of first two years of my life in dog years
earlyYears *= 10.5;

//To discount the Early Years before calculating the remaining years I've been alive
let laterYears = myAge - 2;

//Calculate remaining years of my life into dog years
laterYears *= 4;

//Coming up with my age in dog years after coming up with my age for first 2 years
//and factoring in the calculation for the remaining years.
let myAgeInDogYears = earlyYears + laterYears

//This is may name having all the cases taken to lower case.
let name = 'Matthew';
var myName = name.toLowerCase();

//Console logging an interpolated string.
console.log(`My name is ${myName}. I ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);
