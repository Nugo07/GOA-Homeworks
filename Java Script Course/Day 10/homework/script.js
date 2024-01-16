// 1) davaleba

// const me  = {
//     firstName :'Nugzar',
//     secondName : 'Turmanishvili',
//     age : 16,
//     rank : 'Student',
//     studies : 'GOA',
    
// }
// me.firstName = function(){
//     console.log(this.firstName + " " + this.secondName)
// }



// 2) davaleba
// const car  = {
//     color : 'Silver',
//     model : 'C-Class',
//     releaseDate : 2021,
//     doors : 4,
//     engine : function(){
//         return this.aboutCar
//     },

//     aboutCar : {
//         horsePower : 313, 
//         maxSpeed : 245,
//         fuelConsumption : 6,
//     }
// }


// 3)davaleba

// const btn = document.getElementById('btn')
// function saveFormData() {
    
//     const firstName = document.getElementById('name').value;
//     const lastName = document.getElementById('lastname').value;
//     const age = document.getElementById('age').value;

    
//     const userData = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age
//     };

//     btn.addEventListener('submit',function(){
//         console.log(userData)
//     })
    
// }


// 4) davaleba

const me  = {
    firstName :'Nugzar',
    secondName : 'Turmanishvili',
    rank : 'Student',
    studies : 'GOA',    
}

const method = {
    walk: function(){
        console.log(firstName + " " + secondName + " " + 'walking')
    },
    age: function(){
        console.log(firstName + " " + 'studies' + " " + studies)
    },
    wodeba: function(){
        console.log(firstName + " " + 'is' + " " + rank)
    }
}


