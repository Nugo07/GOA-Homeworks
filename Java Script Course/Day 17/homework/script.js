// 1) davaleba

function StudentID(name, lastName, score) {
    this.name = name;
    this.lastName = lastName;
    this.score = score;
}


const student1 = new StudentID("Nugzar", "Turmanishvili", 100)



console.log(student1.name)     
console.log(student1.lastName)  
console.log(student1.score)  



// 2) davaleba

const goaStudent = new StudentID("Vano", "Motiashvili", 100);

const goaStudent1 = new StudentID("Davit", "Janashia", 100);

const goaStudent2 = new StudentID("Mate", "Giorgelashvili", 100);

const goaStudent3 = new StudentID("Nugzar", "Turmanishvili", 100);

const goaStudent4 = new StudentID("Davit", "Mgeladze", 100);


// 3) davaleba
function car(model,year,weight){
    this.model = model
    this.year = year
    this.weight = weight
}


const car2 = new car('Mercedes Benz C Class W206', 2021, '1668 Kg')


console.log(car2.model)
console.log(car2.year)
console.log(car2.weight)    