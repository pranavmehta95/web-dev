// const product = {
//     title: "Ball Pen",
//     rating: 4.2,
//     offer: 5,
//     price: 270,
// };

// console.log(product);


// const profile = {
//     name: "shradha khapra",
//     occupation: "Entrepreneur",
//     bio: "Apna Collage | Ex-microsoft, DRDO, TO Educate someone is the highest previlege",
// };

// console.log(profile);



//Arithmetic Operators
// let a = 10;
// let b = 3;

// console.log("a + b =", a + b); // Addition
// console.log("a - b =", a - b); // Subtraction
// console.log("a * b =", a * b); // Multiplication
// console.log("a / b =", a / b); // Division
// console.log("a % b =", a % b); // Modulus
// console.log("a ** b =", a ** b); // Exponentiation


//unitary operators
// let c = 5;
// console.log("Original value of c:", c);

// c++; // Increment
// console.log("After increment, c =", c);


//assignmnet operators
// let x = 10; // Assignment
// console.log("Initial value of x:", x);

// x += 5; // Addition assignment
// console.log("After x += 5, x =", x);

// x -= 3; // Subtraction assignment
// console.log("After x -= 3, x =", x);

// x *= 2; // Multiplication assignment
// console.log("After x *= 2, x =", x);

// x /= 4; // Division assignment
// console.log("After x /= 4, x =", x);

// x %= 3; // Modulus assignment
// console.log("After x %= 3, x =", x);

// x **= 2; // Exponentiation assignment
// console.log("After x **= 2, x =", x);



//Comparison Operators
// let p = 7;
// let q = 10;

// console.log("p == q:", p == q); // Equal to
// console.log("p != q:", p != q); // Not equal to
// console.log("p === q:", p === q); // Strict equal to
// console.log("p !== q:", p !== q); // Strict not equal to
// console.log("p > q:", p > q); // Greater than
// console.log("p < q:", p < q); // Less than
// console.log("p >= q:", p >= q); // Greater than or equal to
// console.log("p <= q:", p <= q); // Less than or equal to

//Logical Operators
// let isSunny = true;
// let isWarm = false;

// console.log("isSunny && isWarm:", isSunny && isWarm); // Logical AND
// console.log("isSunny || isWarm:", isSunny || isWarm); // Logical OR
// console.log("!isSunny:", !isSunny); // Logical NOT  



//conditional statements
// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "white";
// } else {
//     color = "black";
// }

// console.log("The selected color is:", color);


// let age = 20;
// if (age < 13) {
//     console.log("Child");
// } else if (age >= 13 && age < 20) {
//     console.log("Teenager");
// } else {
//     console.log("Adult");
// }


//ternary operator
// let score = 85;
// let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : "D";
// console.log("Grade:", grade);


//switch case
// let day = 3;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log("Day name is:", dayName);



// alert("hello");
// prompt("Enter your name:");
// let name = prompt ("Pranav kumar");
// console.log(name);

// //Practice question 1
// let num = prompt("Enter a number");
// if (num % 5 === 0) {
//     console.log(num + " is multiple by 5");
// }
// else{
//     console.log(num + " is not multiple by 5");
// }



//Practice question 2
// let score = prompt("Enter your score:");
// let grade;
// if(score >= 90 && score <= 100){
//     grade = "A";
// }
// else if(score >= 80 && score < 90){
//     grade = "B";
// }
// else if(score >= 70 && score < 80){
//     grade = "C";
// }
// else if(score >= 60 && score < 70){
//     grade = "D";
// }
// else if(score >= 0 && score < 60){
//     grade = "F";
// }
// else{
//     grade = "Invalid score";
// }
// console.log("The grade is:", grade);


// console.log("pranav kumar")
// for(let i=1;i<5;i++){
//     console.log("Hello World");
// }


// let sum = 0;
// for(let i=1;i<=5;i++){
//     sum = sum+i;
//     console.log("The sum is:", sum);
// }



// for(var i=1;i<5;i++){
//     console.log("i", i);
// }
// console.log("Final i:", i);



// let i = 1;
// while(i<=5){
//     console.log("Hello World");
//     i++;
// }



// let i = 1;
// do{
//     console.log("Hello World");
//     i++;
// }
// while(i<=5);


// let str = "pranavkumarmehta";
// for(let i of str){
//     console.log("i=",i);
// }

// let str = "pranavkumarmehta";
// for(let char of str){
//     console.log("char", char);
//     size++;
// }
// console.log("Final size:", size);


//for in loop
// let student = {
//     name: "pranav kumar",
//     age: 21,
//     course: "B.Tech",
// };
// for(let key in student){
//     console.log("key = ", key, "value= ",student[key]);
// }



// for(let i=2;i<=100;i+=2){
//     console.log(i)
// };



// let gamenum = 25;
// let usernum = prompt("Guess a number between 1 to 100");
// console.log(usernum);
// while(usernum != gamenum){
//     usernum = prompt("Wrong guess! Try again:");

// }
// console.log("You guessed the correct number!");



// let str = "pranav kumar";
// let str2 = 'Isha Singh';
// console.log(str,str.length);
// console.log(str[5]);


//template literals
// let name = `This is the template literal.`;
// console.log(name);
// console.log(typeof name);


// let object = {
//     item:  "Antthing",
//     price: 1000,
// };
// console.log("The cost of the object is: ",object.price, "And the name of the item is: ",object.item);
// let output = `The cost of the object is: ${object.price} And the name of the item is: ${object.item}`;
// console.log(output);


// console.log("Pranav \n \t Kumar");

// let str = "    pranav kumar";
// console.log(str);
// str = str.toUpperCase();
// console.log(str);
// str = str.toLowerCase();
// console.log(str);
// console.log(str.trim());

//Strings are immutable in js


// let str = "Pranav Kumar";
// console.log(str.slice(4));


// let str1 = "pranav kumar";
// let str2 = "Mehta";
// let name = str1 + " " + str2;
// console.log(name);
// let fullName = str1.concat(" ",str2);
// console.log(fullName);


// let a = "hello";
// console.log(a.replace("h","H"));

// let str = "Pranav";
// str[1] = "R";
// console.log(str.charAt(1));


// let str = "Pranav kumar";
// console.log(str.charAt(1));


// let str = "Pranav Kumar";
// console.log(str.replace("Kumar","Mehta"));


//Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.

// let fullname = prompt("Enter your full name without spaces");
// let username = "@" + fullname + fullname.length;
// console.log(username);


// Array and array list

// let marks = [34, 54, 36, 42, 67, 54, 42, 67];
// console.log(marks);
// console.log(marks.length);



// let marks = [34, 54, 36, 42, 67, 54, 42, 67];
// console.log(marks);
// console.log(marks.length);

// let superhero = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];
// console.log(superhero);
// console.log(superhero.length);
// console.log(superhero[3]);
// superhero[2] = "Black Panther";
// console.log(superhero);

//for loop through array
// let superhero = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];
// for(let i=0;i<superhero.length;i++){
//     console.log(superhero[i]);
// }

//for of loop
// let superhero = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];
// for(let hero of superhero){
//     console.log(hero);
// }


// let cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// let marks = [34, 54, 36, 42, 67, 54, 42, 67];
// let sum = 0;
// for(let mark of marks){
//     sum = sum + mark;
// }
// console.log("The total sum is:", sum);

// let avg = sum / marks.length;
// console.log("The average is:", avg);




// let items = [250, 400, 150, 800, 1200];
// // let idx = 0;
// // for(let price of items){
// //     // console.log(`value at index ${idx}, =  {price}`);
// //     let offeredPrice = price - (price * 10) / 100;
// //     console.log(`Offered price ${offeredPrice}`);
// //     idx++;
// // }

// for(let i=0;i<items.length;i++){
//     let price = items[i];
//     let offeredPrice = price - (price * 10) / 100;
//     console.log(`Offered price ${offeredPrice}`);
// }



// let veggies = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
// veggies.push("Spinach");
// console.log(veggies);

// let marval_heroes = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];
// // let dc_heroes = ["Superman", "Batman"];
// // marval_heroes = marval_heroes.concat(dc_heroes);
// // console.log(marval_heroes);

// marval_heroes.unshift("Black Panther");
// console.log(marval_heroes);
// marval_heroes.shift();
// console.log(marval_heroes);



// let arr = [10, 20, 30, 40, 50];
// arr.splice(2, 0, 25);
// console.log(arr);

// arr.splice(4, 1);
// console.log(arr);


// function myfunction(){
//     console.log("Hello World");

// }
// myfunction();

// function myFunnction(msg){
//     // parameter
//     console.log(msg);
// }
// myFunnction("Hello Pranav");  // argument

// function sum(a, b ){
//     console.log(a + b);
// }
// sum(3,4);

// function sum(x, y){
//     s = x + y;
//     return s;
// }
// sum(1,2);
// let result = sum(5,7);
// console.log("The sum is:", result);



// const arrowSum = (a,b) => { // arrow function which is introduced in in modern js
//     return a + b;
// }

// const arrowMul = (a,b) => {
//     return a * b;
// }


// Qs. Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.
// "20l,


// function countVowels(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// let string = prompt("Enter a string:");
// let vowelCount = countVowels(string);
// console.log("Number of vowels in the string:", vowelCount);


// perform same task using arrow function
// const countVowelsArrow = (str) => {
//     let count = 0;
//     let vowels = "aeiouAEIOU";
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

// let string2 = prompt("Enter a string:");
// let vowelCount2 = countVowelsArrow(string2);
// console.log("Number of vowels in the string using arrow function:", vowelCount2);



//for Each loop
// let arr = [10, 20, 30, 40, 50];
// arr.forEach(function printval(value, index){
//     console.log(value);
// });


//Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function printSquare(value){
//     console.log(value * value);
// });


// Map function
// let arr = [1, 2, 3, 4, 5];
// let squaredArr = arr.map(function square(value){
//     return value * value;
// });
// console.log(squaredArr);

// filter function
// let arr = [10, 15, 20, 25, 30, 35, 40];
// let evenNumbers = arr.filter(function isEven(value){
//     return value % 2 === 0;
// });
// console.log(evenNumbers);

//reduce function
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce(function accumulate(accumulator, currentValue){
//     return accumulator + currentValue;
// }, 0);
// console.log(sum);


//Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
// let marks = [85, 92, 78, 90, 88, 95, 67, 100];
// let topScorers = marks.filter(function isTopScorer(value){
//     return value >= 90;
// });
// console.log("Marks of students who scored 90+ :", topScorers);

//Qs. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.
let n = parseInt(prompt("Enter a number:"));
let numbers = [];
for(let i=1;i<=n;i++){
    numbers.push(i);
}
let sum = numbers.reduce(function accumulate(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log("Sum of numbers from 1 to", n, "is:", sum);

let product = numbers.reduce(function accumulateProduct(accumulator, currentValue){
    return accumulator * currentValue;
}, 1);
console.log("Product of numbers from 1 to", n, "is:", product);