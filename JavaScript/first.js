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
let score = prompt("Enter your score:");
let grade;
if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90){
    grade = "B";
}
else if(score >= 70 && score < 80){
    grade = "C";
}
else if(score >= 60 && score < 70){
    grade = "D";
}
else if(score >= 0 && score < 60){
    grade = "F";
}
else{
    grade = "Invalid score";
}
console.log("The grade is:", grade);



