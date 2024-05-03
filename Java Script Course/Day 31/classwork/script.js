// const manualMap = function(arr, subFunc){
//   const result = [];
  
//   for(let i = 0; i < arr.length; i++){
//       result.push(subFunc(arr[i]))
//   }
//   return result;
// }

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = manualMap(numbers, function(num){
//   return num * num
// });

// console.log(newNumbers)


const manualMap = function(arr, subFunc){
  const result = [];
  
  for(let i = 0; i < arr.length; i++){
      result.push(subFunc(arr[i], i))
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

const newNumbers = manualMap(numbers, function(num, index){
  if(index % 2 === 0) return num ** 2;
  return num;
});

console.log(newNumbers)