// 1) task

    // setInterval(function() {
    //     const date = new Date();
    //     console.log(date.toString());
    // }, 1000);


// 2) task

// function calculateArea(radius) {
//     if (radius < 0) {
//         return "Radius cannot be negative";
//     } else {
//         return Math.PI * radius ** 2;
//     }
   
// }
// console.log(calculateArea())


// 3) task
 //ver mivxvdi


// 4) davaleba
// ver mivxdi

// 5)
// -?

// 6) task

// function printDayOfWeek(date) {
//     const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const dayIndex = date.getDay();
//     console.log("Day of the week:", dayNames[dayIndex]);
// }
// const currentDate = new Date();
// printDayOfWeek(currentDate);

// 7)

// 8)
// function checkLeapYear(date) {
//     const year = date.getFullYear();
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log(`${year} is a leap year.`);
//     } else {
//         console.log(`${year} is not a leap year.`);
//     }
// }
// const inputDate = new Date("2024-02-29"); 
// checkLeapYear(inputDate);

// 9)
// function calculateDifferenceInDays(date1, date2) {
//     const date1MS = date1.getTime();
//     const date2MS = date2.getTime();
//     const differenceMS = Math.abs(date2MS - date1MS);
//     const differenceDays = Math.ceil(differenceMS / (1000 * 60 * 60 * 24));
//     console.log("Difference in days:", differenceDays);
// }

// const startDate = new Date("2024-03-10"); 
// const endDate = new Date("2024-03-20");
// calculateDifferenceInDays(startDate, endDate);

// 10)

function printAge(birthdate) {
    const currentDate = new Date();
    const birthYear = birthdate.getFullYear(); 
    const currentYear = currentDate.getFullYear(); 
    let age = currentYear - birthYear;
    if (currentDate < new Date(currentYear, birthdate.getMonth(), birthdate.getDate())) {
        age--;
    }

    console.log("Age:", age);
}


const birthdate = new Date("1990-03-15");
printAge(birthdate);
