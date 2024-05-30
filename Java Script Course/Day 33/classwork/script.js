const numbers = [1,2,3,4,5]

// numbers.forEach(function(value){
//     console.log(value)
// })
// let sum = 0

// numbers.forEach(function(value){
//     sum += value
// })

// console.log(sum)


// function manualForEach(array,func1){
//     for(let i = 0; i< array.length; i++){
//       func1(array[i])
       
//     }
// }

// manualForEach(numbers,function(value){
//     console.log(value)
// })



function manualReduce(arr,func,startingValue){
    let result = startingValue
    for (let i = 0; i< arr.length; i++){
        resutl = func(result,arr[i])
    }
    return result
}

const arr = [1,2,3,4,5]


// const result = manualReduce (arr,function(result,nextElement){
//     return resut += nextElement
// },5)

// console.log(result)

const strArr = "nugzar".split("")

result = manualReduce(strArr,function(result,nextElement){
    return result + nextElement
    
},"nugzar")
console.log(result)















