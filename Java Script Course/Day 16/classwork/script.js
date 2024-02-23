// const me = {
//     name : 'nugzar',
//     age : '16',
//     height : '183',
//     color : "black",
//     food : 'khinkali'
// }
// me.food = 'lobiani'
// me.sport = 'football'

// const friend = {
//     name : 'giorgi',
//     age : '16',
//     height : '177',
//     color : "blue",
//     food : 'mchadi'
// }

// friend.food = 'gomi'
// friend.sport = 'hockey'



// console.log(me)
// console.log(friend)



// const car = {
//     name : 'BMW',
//     model : 'M5 F90',
//     weight : '1,982 ',
//     start : function(){
//         console.log('Car Is Starting')
//     },
//     break : function(seconds){
//         for (let i = seconds; i > 0; i--){
//             console.log('Car Stop In' + i +  'seconds')
//         }
//     }
// }
// car.start()

// car.start = function(){
//     console.log('Hello World')
// }

// car.start()

// car.break(10)


const form = document.getElementById('form')
const btn = document.getElementById('btn')

const me = {
    name : 'nugzar',
    age : '16',
    height : '183',
    color : "black",
    food : 'khinkali'
}

btn.addEventListener('click',function(){
    const propertyName = form.value; 
    console.log(me[propertyName]);  
})


