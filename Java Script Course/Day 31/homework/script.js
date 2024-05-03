// 1)

// const people = [
//     { name: 'Luka', age: 14 },
//     { name: 'Me', age: 17 },
//     { name: 'Sandro', age: 16 }
//   ];
  
//   function getName(person) {
//     return person.name;
//   }
  
//   const names = people.map(getName);
//   console.log(names);
  

// 2)

// Function to check if a number is prime
// function prime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
//   }
  
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeOrNot = numbers.map(prime);
  
//   console.log(primeOrNot);
  


// 3)

// const manualFilter = function(arr, func){
//     const newArr = []
    
//     for(let i = 0; i < arr.length; i++){
//         if(func(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
    
//     return newArr;
// }

// const students = [{name: "Luka", grade: 81}, {name: "Me", grade:79.9}, {name: "Sandro", grade: 75}]

// const whoPassed = manualFilter(students, function(studentObj){
//     return studentObj.grade >= 80;
// })

// console.log(whoPassed)

// 4)

// const fileNames = ['image.jpg', 'document.docx', 'code.js', 'data.csv', 'photo.jpg'];

// function isJpgFile(fileName) {
//   return fileName.endsWith('.jpg');
// }

// const jpgFiles = fileNames.filter(isJpgFile);

// console.log(jpgFiles);