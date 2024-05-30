// 1)

// function positiveNumber(arr) {
//     return arr.every(function(num) {
//         return num > 0;
//     });
// }

// console.log(positiveNumber([1, 2, 3, 4]));

// 2)

// function emptyString(arr) {
//     return arr.every(function(str) {
//         return str.length > 0;
//     });
// }

// console.log(emptyString(["hello", "world", ""]));

// 3)

// function allBooleansTrue(arr) {
//     return arr.every(function(bool) {
//         return bool === true;
//     });
// }


// console.log(allBooleansTrue([2>1, 105>23, true]))

//4)
// function allNumbersEven(arr) {
//     return arr.every(function(num) {
//         return num % 2 === 0;
//     });
// }
// console.log(allNumbersEven([2, 4, 6, 8])); 


// 5)
// function gades(grades, passingLevel) {
//     return grades.some(function(grade) {
//         return grade > passingLevel;
//     });
// }

// console.log(grades([50, 60, 70], 75));

// 6)
// function adminUsers(users) {
//     return users.some(function(user) {
//         return user.role === 'admin';
//     });
// }

// 7)
// function overdueItems(items) {
//     return items.some(function(item) {
//         return item.overdue === true;
//     });
// }

// 8)
// function pimeNumbers(numbers) {
//     return numbers.some(function(num) {
//         return isPrime(num);
//     });
// }

// 9)
// function firstNegativeNumber(arr) {
//     return arr.find(function(num) {
//         return num < 0;
//     });
// }

// 10)
// function findUserById(users, id) {
//     return users.find(function(user) {
//         return user.id === id;
//     });
// }

// 11)

// function firstIncompleteTask(tasks) {
//     return tasks.find(function(task) {
//         return task.complete === false;
//     });
// }

// 12)
// function productByName(products, name) {
//     return products.find(function(product) {
//         return product.name === name;
//     });
// }

// 13)
// function primeNumber(arr) {
//     return arr.findIndex(function(num) {
//         return isPrime(num);
//     });
// }

// 14) 
// function firstOverdueItem(items) {
//     return items.findIndex(function(item) {
//         return item.overdue === true;
//     });
// }

// 15) 
// function productOutOfStock(products) {
//     return products.findIndex(function(product) {
//         return product.inStock === false;
//     });
// }

// 16) 
// function adminUser(users) {
//     return users.findIndex(function(user) {
//         return user.role === 'admin';
//     });
// }
