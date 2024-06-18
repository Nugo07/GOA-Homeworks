// 1. Write a function that takes a number as input and logs whether it is positive, negative, or zero.
// 2. Write a function that determines if a number is even or odd and logs the result.
// 3. Write a function that checks if a given year is a leap year and logs the result.
// 4. Write a function that takes two numbers as parameters and returns the larger one.
// 5. Write a function that takes three numbers as parameters and returns the smallest one.
// 6. Write a function that checks if a given string is empty (has zero length).
// 7. Write a function that checks if a given string is a palindrome (reads the same backward as forward).
// 8. Write a function that converts a numeric grade (0-100) to a letter grade (A, B, C, etc.).
// 9. Write a function that checks if a given number is a prime number.
// 10. Write a function that converts temperature from Celsius to Fahrenheit based on user input.


// 1. 
// function check(number) {
//     if (number > 0) {
//         console.log("Positive");
//     } else if (number < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }


// 2. 
// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// 3. 
// function leapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log("Leap year");
//     } else {
//         console.log("Not a leap year");
//     }
// }

// 4. 
// function largerNum(num1, num2) {
//     console.log(Math.max(num1, num2));
// }

// 5. 
// function smallestNum(num1, num2, num3) {
//     console.log(Math.min(num1, num2, num3));
// }

// 6. 
// function empty(string) {
//     console.log (string.length === 0);
// }

// 7.
//? 

// 8. 
// function grade(grade) {
//     if (grade >= 90) {
//         console.log( 'A');
//     } else if (grade >= 80) {
//         console.log( 'B');
//     } else if (grade >= 70) {
//         console.log( 'C');
//     } else if (grade >= 60) {
//         console.log( 'D');
//     } else {
//         console.log( 'F');
//     }
// }

// 9.
// ?

// 10. 
// function fahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }




// Objects:

// 1. Create an object representing a person with properties like name, age, and city.
// 2. Write code to access and log the name and age of the person object created in task 1.
// 3. Add a property for email to the person object and set its value.
// 4. Create an object representing a car with properties like make, model, and an owner object with properties like name and age.
// 5. Write code to access and log the owner's name and age of the car object created in task 4.
// 6. Change the model of the car to a new value.
// 7. Add a method to the car object that calculates the age of the car based on the current year and the year the car was manufactured. (Do not use this keyword)
// 8. Write code to iterate over all properties of the person object created in task 1 and log each property and its value.


// 1)

// let person = {
//     name: 'Nugzar',
//     age: 16,
//     city: 'Kareli'
// };

// 2)
// console.log(person.name)
// console.log(person.age)

// 3)
// person.email = "nugzarturmanishvili860@gmailc.com"
// console.log(person.email)

// 4)
// let car = {
//     make : "BMW",
//     model : "M5",
//     owner : {
//         name : "Nugzar",
//         age : 16
//     }
// }


// 5)
// console.log(car.owner.name)
// console.log(car.owner.age)

// 6)

// car.model = "M6"
// console.log(car.model)


// 7)
//? 

// 8) 
// ?


// 1. Write a while loop that logs numbers from 1 to 10.
// 2. Write a while loop that logs numbers from 10 down to 1.
// 3. Write a while loop to calculate the factorial of a given number (n).
// 4. Write a while loop that generates the Fibonacci sequence up to a specified limit (n).
// 5. Write a while loop that reverses a given number (n). For example, input 123 should output 321.
// 6. Write a while loop that finds and logs the largest digit in a given number (n).
// 7. Write a while loop that checks if a given number (n) is a palindrome.
// 8. Write a while loop that calculates the sum of digits of a given number (n).
// 9. Write a while loop that checks if a given number (n) is a prime number.
// 10. Write a while loop that reverses a given string.

// 1)
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// 2)
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// 3)
// let n = 5
// let factorial = 1;
// let i = n;
// while (i > 1) {
//     factorial *= i;
//     i--;
// }
// console.log(factorial);


// 1. Write a for loop that logs numbers from 1 to 10 to the console.
// 2. Write a for loop that logs even numbers between 1 and 20.
// 3. Write a for loop that calculates and logs the sum of numbers from 1 to 100.
// 4. Write a for loop that logs multiples of 5 up to 50.
// 5. Write a for loop that logs numbers from 10 down to 1.
// 6. Write a for loop that calculates and logs the factorial of the number 5
// 7. Write a for loop to calculate and log the sum of numbers in an array [1, 2, 3, 4, 5]
// 8. Write a for loop to find and log the largest number in an array [10, 5, 8, 20, 2]
// 9. Write a for loop that counts and logs the number of vowels (a, e, i, o, u) in a given string.
// 10. Write a for loop to calculate and log the average of numbers in an array [10, 20, 30, 40, 50]

// 1)
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2)
// for (let i = 1; i <= 20; i ++) {
//     console.log(i);
// }

// 3)

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// 4)

// for (let i = 5; i <= 50; i += 5) {
//     console.log(i);
// }

// 5)
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 6)
// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial *= i;
// }
// console.log(factorial);




// 1. Write a function addNumbers that takes two parameters and returns their sum.
// 2. Write a function multiplyNumbers that takes two parameters and returns their product.
// 3. Write a function calculateRectangleArea that takes width and height as parameters and returns the area of rectangle.
// 4. Write a function calculateCircleCircumference that takes the radius as a parameter and returns the circumference.
// 5. Write a function isEven that takes a number as a parameter and returns true if it's even, false otherwise.
// 6. Write a function findMax that takes two numbers as parameters and returns the larger one.
// 7. Write a function reverseString that takes a string as a parameter and returns its reverse.
// 8. Write a function generateNumbersArray that takes a number n as a parameter and returns an array of numbers from 1 to n.
// 9. Write a function sumArray that takes an array of numbers as a parameter and returns the sum of all numbers in the array.
// 10. Write a function isPerfectNumber that takes a number as a parameter and returns true if it's a perfect number (a number equal to the sum of its proper divisors excluding itself), false otherwise. (https://en.wikipedia.org/wiki/Perfect_number)


 // 1)

 function addNumbers(a, b) {
    return a + b;
}
 // 2)

 function multiplyNumbers(a, b) {
    return a * b;
}
 // 3)

 function calculateRectangleArea(width, height) {
    return width * height;
}

 // 4)
 function calculateRectangleArea(width, height) {
    return width * height;
}
 // 5)
 function isEven(number) {
    return number % 2 === 0;
}
