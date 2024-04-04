// const date = new Date()


// const year = date.getFullYear()
// const month = date.getMonth()
// const day = date.getDate()
// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()
// const milliseconds = date.getMilliseconds()
// const dayOfWeek = date.getDay()

// console.log(year)
// console.log(month)
// console.log(day)
// console.log(hours)
// console.log(minutes)
// console.log(seconds)
// console.log(milliseconds)
// console.log(dayOfWeek)

// date.setFullYear(2024)
// date.setMonth(2) 
// date.setDate(11)
// date.setHours(9)
// date.setMinutes(45)
// date.setSeconds(39)
// date.setMilliseconds(500)

// console.log(date)

// setInterval(function() {
//     const currentDate = new Date();
//     console.log(currentDate.toString());
//   },1000)


// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// setInterval(function() {
//   seconds++
//   if (seconds === 60) {
//     seconds = 0;
    
//     minutes++;
//     if (minutes === 60) {
//       minutes = 0;
      
//       hours++;
//     }
//   }
//   console.log("Seconds:", seconds, "Minutes:", minutes, "Hours:", hours);
// }, 1000);


let seconds = 60;
let minutes = 5;


setInterval(function() {
  seconds--;

  if (seconds === 0) {
    seconds = 60;
    minutes--;
  }
  
  if (minutes === 0) {
    clearInterval();
  }
  
  console.log("Minutes:", minutes, "Seconds:", seconds);
}, 1000);
